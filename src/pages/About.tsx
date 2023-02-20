import backgroundImage from "../assets/img/stockholm.jpg";

export const About = () => {
  return (
    <div
      className='bg-image-about'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className='title'>Our Story</h1>
      <div className="aboutText">
      <p>
        Once upon a time in Stockholm, there was a SNEAKEX called Sole
        Seekers. It was a small but cozy shop located in the heart of the city,
        where sneaker enthusiasts from all over town came to find the latest and
        greatest sneakers.{" "}
      </p>{" "}
      <p>
        {" "}
        The owner of SNEAKEX, Alex, was a true sneakerhead himself. He had
        a deep passion for sneakers, and he had been collecting them since he
        was a young boy. He knew everything there was to know about sneakers,
        from the different styles to the various brands and the latest trends.
      </p>
      <p>
        {" "}
        One day, Alex decided to take his love for sneakers to the next level
        and opened up his own webshop, where sneakerheads from all over the
        world could shop for the latest and greatest sneakers from the comfort
        of their own homes.
      </p>
      <p>
        {" "}
        Alex knew that the key to a successful webshop was to offer a wide range
        of high-quality sneakers, so he made sure to stock up on all the latest
        styles from the biggest brands. From Nike to Adidas to Puma, Sole
        Seekers had it all.{" "}
      </p>
      <p>
        But Alex also knew that a webshop is not just about the products, but
        also about the experience. He wanted to make sure that his customers
        felt just as welcome and comfortable shopping online as they did in his
        physical store. So, he designed the webshop to be user-friendly and easy
        to navigate, with plenty of pictures and descriptions for each sneaker.{" "}
      </p>
      <p>
        And it worked! SNEAKEX quickly became one of the most popular
        webshops for sneakers, with customers from all over the world flocking
        to buy their favorite sneakers from Alex and his team.
      </p>
      <p>
        {" "}
        So, whether you're a seasoned sneakerhead or just starting out, head on
        over to SNEAKEX' webshop to find your perfect pair of kicks!
      </p>
      </div>
    </div>
  );
};
