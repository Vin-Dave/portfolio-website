import { useRef, useState } from "react";
import { AVAILABLE_PLACES } from "./data.js";
import logoImg from "./assets/logo.png";
import { ModalComponent } from "./components/ModalComponent.jsx";
import { DeleteConfirmationComponent } from "./components/DeleteConfirmationComponent.jsx";
import { PlacesComponent } from "./components/PlacesComponent.jsx";
export function App() {
  const modalRef = useRef();
  const selectedPlaceRef = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);

  function handleStartRemovePlace(id) {
    modalRef.current.open();
    selectedPlaceRef.current = id;
  }

  function handleStopRemovePlace() {
    modalRef.current.close();
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlaceRef.current)
    );
    modalRef.current.close();
  }

  return (
    <>
      <ModalComponent ref={modalRef}>
        <DeleteConfirmationComponent
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </ModalComponent>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <PlacesComponent
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <PlacesComponent
          title="Available Places"
          places={AVAILABLE_PLACES}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
