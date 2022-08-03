import React from 'react'
import NewTariff from './NewTariff'
import Tariff from './Tariff'

function Tariffs() {
    const tariffs = [

        {
          title: 'start',
          percent: 30,
          period: 3,
          mostPopular: false,
          date:'10.02.2021',
          author:'jafar turaev'
        },
        {
          title: 'paltinuim',
          percent: 50 ,
          period: 6,
          mostPopular: false,
          date:'18.03.2022',
          author:'Vladimir Putin'
        },
        {
          title: 'Gold',
          percent: 70,
          period: 12,
          mostPopular: false,
          date:'30.09.2022',
          author:'Ozod Nazarbaev'
        },
        {
            title: 'paltinuim',
            percent: 50 ,
            period: 6,
            mostPopular: false,
            date:'18.03.2022',
            author:'Vladimir Putin'
          },
          {
            title: 'paltinuim',
            percent: 50 ,
            period: 6,
            mostPopular: false,
            date:'18.03.2022',
            author:'Vladimir Putin'
          },
     
          {
            title: 'paltinuim',
            percent: 50 ,
            period: 6,
            mostPopular: false,
            date:'18.03.2022',
            author:'Vladimir Putin'
          },
     
          {
            title: 'paltinuim',
            percent: 50 ,
            period: 6,
            mostPopular: false,
            date:'18.03.2022',
            author:'Vladimir Putin'
          },
     
          {
            title: 'paltinuim',
            percent: 50 ,
            period: 6,
            mostPopular: false,
            date:'18.03.2022',
            author:'Vladimir Putin'
          },
     
          {
            title: 'start',
            percent: 30,
            period: 3,
            mostPopular: false,
            date:'10.02.2021',
            author:'jafar turaev'
          },
          {
            title: 'start',
            percent: 30,
            period: 3,
            mostPopular: false,
            date:'10.02.2021',
            author:'jafar turaev'
          },    

     
      ]

      
    return (
    <div>
        <Tariff tariffs={tariffs}/>
        <NewTariff/>
    </div>
  )
}

export default Tariffs