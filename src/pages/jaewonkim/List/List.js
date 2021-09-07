import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

import TopNav from '../../../components/TopNav/TopNav';
import CoffeeType from './CoffeeType/CoffeeType';
import CoffeeCard from './CoffeCard/CoffeeCard';
import './List.scss';

library.add(faHeartRegular, faHeartSolid);

class ListJaeWonKim extends Component {
  constructor() {
    super();
    this.state = {
      coldBrewCoffeeData: [],
      brewedCoffeeData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/myCoffeePages.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          coldBrewCoffeeData: data.coldBrewCoffeePages,
          brewedCoffeeData: data.brewedCoffeePages,
        });
      });
  }

  render() {
    return (
      <div className="List">
        <TopNav />

        <section>
          <dl className="section1">
            <CoffeeType title={'콜드 브루 커피'} />
          </dl>

          <dl className="section2">
            {this.state.coldBrewCoffeeData.map(data => {
              return (
                <CoffeeCard
                  key={data.id}
                  alt={data.alt}
                  src={data.src}
                  name={data.name}
                  link="/detail-jaewonkim"
                />
              );
            })}
          </dl>

          <dl className="section1">
            <CoffeeType title={'브루드 커피'} />
          </dl>

          <dl className="section2">
            {this.state.brewedCoffeeData.map(data => {
              return (
                <CoffeeCard
                  key={data.id}
                  alt={data.alt}
                  src={data.src}
                  name={data.name}
                  link="/detail-jaewonkim"
                />
              );
            })}
          </dl>
        </section>
      </div>
    );
  }
}

export default ListJaeWonKim;
