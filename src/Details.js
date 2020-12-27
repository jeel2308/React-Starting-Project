import React from 'react';
import { navigate } from '@reach/router';
import Modal from './Modal';
import pet from '@frontendmasters/pet';
import Carousal from './Carousal';
import ErrorBoundary from './ErrorBoundary.jsx';
import ThemeContext from './ThemeContext';

{
  /* for debugging props */
  /*return (
    <pre>
      <code> {JSON.stringify(props, null, 4)} </code>{' '}
    </pre>
  );*/
}

{
  /** 
    //old constructor way
constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }
*/
}
class Details extends React.Component {
  state = { loading: true, showModal: false };

  componentDidMount() {
    //   console.log("Mounted");
    // for testing error boundary
    // throw new Error("lol");
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        url: animal.url,
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    });
  }

  toggleModal = () => {
    this.setState((prevstate) => ({
      showModal: !prevstate.showModal,
    }));
  };

  adopt = () => navigate(this.state.url);

  render() {
    //   console.log("jeel");
    if (this.state.loading) {
      return <h1>Loading ...</h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;

    return (
      <div className="details">
        <Carousal media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {(themeHook) => (
              <button
                style={{ backgroundColor: themeHook[0] }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adapt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No, I am a monster</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
