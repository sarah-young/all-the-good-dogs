import React from 'react';
import Breed from './Breed';

//Breed List Component
class BreedList extends React.Component {

  render() {

    function addDoggo(breed, id) {
      rows.push(<Breed
                breed= {breed}
                id = {id}
                key = {breed}
                changeDoggo = {changeDoggo}
                />);
    }

    const changeDoggo = this.props.changeDoggo;
    const breedlistobj = this.props.dogs;
    const rows = [];
    const keylist = Object.keys(breedlistobj)
    keylist.forEach(function(dog) {
      let x = breedlistobj[dog].map(x => x);
      let breed; let id;

      if (x.length) {
        x.forEach(function(subBreed) {
          breed = `${subBreed} ${dog}`; id = `${dog}-${subBreed}`;
          addDoggo(breed, id)
        });
      } else {
          breed = `${dog}`; id = `${dog}`;
          addDoggo(breed, id)
        }
      });
      rows.push(<Breed
                breed="random"
                key="random"
                id="random"
                changeDoggo={changeDoggo}
                />);

    return (
      <div
        name="Dog Breed List"
        className="dog-breed-list-container"
        data-test="dog-breed-list">
          {rows}
        <div className="doggo-footer">
          <a href="https://dog.ceo/dog-api"> <img src="https://dog.ceo/img/dog-api-logo.svg" alt="dog ceo logo" className="doggo-logo"/>  Powered by Dog API</a>
        </div>
      </div>
      );
    }
  }

export default BreedList;
