import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class List extends React.Component {

  static propTypes = {
    items: PropTypes.array,
   };

  render() {

    const { items = null} = this.props;

    return (
      <section className='listImg'>
        <ul>
          {items && items.map((item, i) => {
            return(
              <li key={i}>
                <img src={item.image}/>
                <div>
                  <p>{item.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    )
  }
}

export default List;
