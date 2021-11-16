import React, {Component} from "react";
import SuperHero from "../SuperHeros/SuperHeros";


class App extends Component{
    state = {
        superheroes: [
            {
                superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondarAbility: 'Rich'
            },
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondarAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondarAbility: 'Shoots web'
            }
        ]
    } 

    render(){
        return(
            <div className = "MainFormat">
              <SuperHero superheroes={this.state.superheroes}/>
            </div>
        );
    }
}



export default App;
