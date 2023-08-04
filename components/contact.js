import React from "react";
import "../app/globals.css";

const Contact = () => {
  return (
    <main id="">
      <div className="">
        <p className="text-black text-xl w-3/4 p-20 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          diam ante, ultrices placerat magna at, iaculis congue erat. Vestibulum
          tincidunt nec libero sed convallis. Sed sapien urna, hendrerit a
          venenatis eu, finibus quis metus. Sed bibendum aliquet consectetur.
          Vivamus dictum sem turpis, elementum rhoncus metus sagittis vel.
          Vestibulum tristique lorem sed tortor congue malesuada. Nullam sit
          amet eros felis. Nunc at nisi ac lectus iaculis eleifend in sed
          tortor. Integer id bibendum metus. Vestibulum eu hendrerit neque.
          Praesent ullamcorper, magna vitae luctus mollis, nibh dolor malesuada
          lorem, eu placerat lacus odio sed diam. Vestibulum molestie
          pellentesque cursus. Pellentesque egestas tortor lacus, ut hendrerit
          ipsum feugiat non. Nunc rhoncus arcu quis est semper fringilla.
          Curabitur vel tempus arcu. Cras commodo vel libero sed sagittis. In
          elit dui, tincidunt a aliquet a, elementum dapibus metus. Sed eget
          lectus sed libero luctus tincidunt ac a sapien. Vestibulum mollis arcu
          arcu, non venenatis augue aliquam ac. Nam dictum dictum nulla ac
          scelerisque. Sed vulputate vel mauris at dictum. Fusce convallis
          fringilla tortor. In turpis magna, iaculis et quam ut, luctus mattis
          leo. Nunc vitae ante justo. Curabitur libero ante, fermentum eu rutrum
          vitae, scelerisque quis lorem. Morbi vehicula ligula vitae neque
          vestibulum accumsan. Duis tristique vehicula nibh eu molestie.
          Praesent tempus aliquet lectus, in bibendum orci varius sit amet. Ut
          eget convallis eros, id consequat justo. Vestibulum porta nisi id eros
          mollis rutrum. Maecenas nec semper nulla.
        </p>

        <div className="text-center p-10">
          <button
            onClick={() => (window.location = "mailto:@gmail.com")}
            className="rounded-lg bg-stone-700 text-black px-8 py-3 border-white border-2"
          >
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
};

export default Contact;
