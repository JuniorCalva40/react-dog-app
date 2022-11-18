import React, { Component } from 'react';
import './App.css';
import Select from './components/Select';
import BreedImage from './components/BreedImage';

class App extends Component {
    state= {
        breedsList: null,
        selectedBreed: null,
        error: false
    }
   componentDidMount() {
       this.fetchAllBreeds();
   }
   fetchAllBreeds = async () => {
       try { //conseguir data
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        if (response.ok) {
            const data = await response.json();
            this.setState({
                breedsList: Object.keys(data.message)
            })
        } else {
            this.setState({
                error: true
            })
            alert('Informacion no disponible')
        }
        } catch (e) { 
            this.setState ({
                error: true
            })
            alert('Informacion no disponible')
        }
       }
       selectHandler = (breed) => {
           this.setState({
               selectedBreed: breed
           })
       }
    render( ) {
        console.log(this.state.selectedBreed);
        return (
            <div className="App">

                <h1 className='App-breeds'>APP RAZAS DE PERROS</h1>
                <Select breedsList={this.state.breedsList} onSelect={this.selectHandler} isError={this.state.error}/>
                <BreedImage breed={this.state.selectedBreed}/>
                <BreedImage breed={this.state.selectedBreed}/>
                <BreedImage breed={this.state.selectedBreed}/>
                <BreedImage breed={this.state.selectedBreed}/>
            </div>
        );
    }
}

export default App;