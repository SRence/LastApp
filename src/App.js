import React, { Component } from 'react';

import Jose_rizal from './Jose_rizal.png'
import marcela from './marcela.png'
import gal from './gal.png'
import esteban from './esteban.png'
import mabini from './mabini.png'
import fran from './fran.png'
import and from './and.png'
import greg from './greg.png'
import pilar from './pilar.png'
import pad from './pad.png'
import die from './die.png'
import ma from './ma.png'
import e from './e.png'
import ag from './ag.png'
import fe from './fe.png'
import m from './m.png'
import f from './f.png'
import v from './v.png'
import ty from './ty.png'
import fa from './fa.png'
import de from './de.png'
import go from './go.png'
import z from './z.png'
import em from './em.png'
import h from './h.png'
import x from './x.png'
import c from './c.png'
import l from './l.png'
import lu from './lu.png'
import aka from './aka.png'
import k from './k.png'
import y from './y.png'
import j from './j.png'
import qw from './qw.png'
import we from './we.png'
import wq from './wq.png'
import ter from './ter.png'
import pal from './pal.png'
import mel from './mel.png'
import pin from './pin.png'
import he from './he.png'
import pan from './pan.png'
import bul from './bul.png'
import los from './los.png'
import io from './io.png'
import dow from './dow.png'
import as from './as.png'
import jo from './jo.png'
import so from './so.png'
import tr from './tr.png'
import './App.css';

const people =[
{
    id: 0,
    name:' MARCELA MARINIO AGONCILLO ',
	img:<img src={marcela} />,
    
  }, {
    id: 1,
    name: 'GALICANO APACIBLE',
    img:<img src={gal} />,
  }, {
    id: 2,
    name: 'AGUADA ESTEBAN',
	img:<img src={esteban} />,
  }, {
    id: 3,
    name: 'APOLINARIO MABINI',
    img:<img src={mabini} />,
  }, {
    id: 4,
    name: 'FRANCISCO BALTAZAR',
	img:<img src={fran} />,
  }, {
    id: 5,
    name: 'ANDRES BONIFACIO',
    img:<img src={and} />,
  }, {
    id: 6,
    name: 'GREGORIA DE JESUS',
    img:<img src={greg} />,
  }, {
    id: 7,
    name: 'ALFONSO DE OCAMPO',
    img:<img src={pilar} />,
  }, {
    id: 8,
    name: 'JOSE BURGOS',
    img:<img src={pad} />,
  }, {
    id: 9,
    name: 'DIEGO SILANG',
    img:<img src={die} />,
  }, {
    id: 10,
    name: 'MARINA DIZON',
    img:<img src={ma} />,
  }, {
    id: 11,
    name: 'EUGENIO CABEZAS',
    img:<img src={e} />,
  }, {
    id: 12,
    name: 'EMILIO AGUINALDO',
    img:<img src={ag} />,
  }, {
    id: 13,
    name: 'FELIPE CALDERON',
    img:<img src={fe} />,
  }, {
    id: 14,
    name: 'MIGUEL MALVAR Y CARPIO',
    img:<img src={m} />,
  }, {
    id: 15,
    name: 'FELIPE AGUNCILLO',
    img:<img src={f} />,
  }, {
    id: 16,
    name: 'JULIAN FELIPE',
    img:<img src={v} />,
  }, {
    id: 17,
    name: 'ARELLANO CAYETANO',
    img:<img src={ty} />,
  }, {
    id: 18,
    name: 'FRANCISCO DAGOHOY',
    img:<img src={fa} />,
  }, {
    id: 19,
    name: 'GREGORIO DEL PILAR',
    img:<img src={de} />,
  }, {
    id: 20,
    name: 'MARIANO GOMEZ',
    img:<img src={go} />,
  }, {
    id: 21,
    name: 'FERNANDO MA. GUERRERO',
    img:<img src={z} />,
  }, {
    id: 22,
    name: 'EMILIO JACINTO',
    img:<img src={em} />,
  }, {
    id: 23,
    name: 'JOSE MA. PANGANIBAN',
     img:<img src={h} />,
  }, {
    id: 24,
    name: 'GRACIANO LOPEZ-JAENA',
    img:<img src={x} />,
  }, {
    id: 25,
    name: 'DR. JOSE RIZAL',
    img:<img src={Jose_rizal} />,
  }, {
    id: 26,
    name: 'JOSE PALMA',
	img:<img src={c} />,
     }, {
    id: 27,
    name: 'LEONA FLORENTINO',
    img:<img src={l} />,
  }, {
    id: 28,
    name: 'RAJAH LAKANDULA',
    img:<img src={aka} />,
  }, {
    id: 29,
    name: 'JUAN LUNA',
     img:<img src={lu} />,
  }, {
    id: 30,
    name: 'LAPU-LAPU',
    img:<img src={k} />,
  }, {
    id: 31,
    name: 'LUIS AGUADO',
    img:<img src={y} />,
  }, {
    id: 32,
    name: 'ANTONIO LUNA',
    img:<img src={j} />,
  }, {
    id: 33,
    name: 'FRANCISCO MAKABULOS',
    img:<img src={qw} />,
  }, {
    id: 34,
    name: 'MAXIMO INOCENCIO',
    img:<img src={we} />,
  }, {
    id: 35,
    name: 'PADRE PATERNO',
    img:<img src={wq} />,
  }, {
    id: 36,
    name: 'RAFAEL PALMA',
	img:<img src={pal} />,
    
  }, {
    id: 37,
    name: 'TERESA MAGBANUA',
	img:<img src={ter} />,
    
  }, {
    id: 38,
    name: 'MELCHORA AQUINO',
    img:<img src={mel} />,
  }, {
    id: 39,
    name: 'TOMAS PINPIN',
    img:<img src={pin} />,
  }, {
    id: 40,
    name: 'MARCELO H. DEL PILAR',
     img:<img src={he} />,
  }, {
    id: 41,
    name: 'PANDAY PIRA',
         img:<img src={pan} />,
  }, {
    id: 42,
    name: 'MARIANO PONCE',
    img:<img src={bul} />,
  }, {
    id: 43,
    name: 'ISABELO DELOS REYES SR.',
    img:<img src={los} />,
  }, {
    id: 44,
    name: 'ARTEMIO RICARTE',
    img:<img src={io} />,
  }, {
    id: 45,
    name: 'LEONOR RIVERA',
    img:<img src={dow} />,
  }, {
    id: 46,
    name: 'EPIFANIO DELOS SANTOS',
    img:<img src={as} />,
  }, {
    id: 47,
    name: 'MARIA JOSEFA GABRIELA SILANG',
    img:<img src={jo} />,
  }, {
    id: 48,
    name: 'RAJAH SOLIMAN',
    img:<img src={so} />,
  }, {
    id: 49,
    name: 'TRINIDAD TECSON',
	img:<img src={tr} />,
      }, 
]

function searchingFor(tern){
  return function(x){
    return x.name.toLowerCase().includes(tern.toLowerCase())  || !tern;

  }
}



class App extends Component {
  constructor(props){
    super(props);

      this.state = {
        people: people,
        tern:'',
      }
  this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event){
    this.setState({tern: event.target.value})
  }
  render() {
    const {tern, people} = this.state;
    return (

      <div className="App">

        <form>
        <p>Search:
          <input type="text"
                  onChange={this.searchHandler}
                  value={tern}
          /></p>
        </form>
		
		
      {
        people.filter(searchingFor(tern)).map(person =>
          
              <div key={person.id}>
                <h2> {person.img}{person.name} </h2>
              </div>
         )
       
      }
        
      </div>
    );
  }
}

export default App;