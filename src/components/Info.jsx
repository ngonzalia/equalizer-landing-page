import Button from './Button';

const Info = () => {
  return (
    <section className='info'>
      
      <div className='info-bg'></div>

      <div className='card'>
        <h2 className='card-title'>Premium EQ</h2>
        <p className='card-text'>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
        <div className='card-price-container'>
          <p className='card-price'>$4</p>
          <p className='card-price card-price-small'>/ month</p>
        </div>
        <div className='card-buttons'>
          <Button
            type='iOS'
            icon='apple' 
          />
          <Button
            type='Android'
            icon='android' 
          />
        </div>
      </div>
    </section>
  );
}

export default Info;
