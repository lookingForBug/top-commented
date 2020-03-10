import React from "react";
import PropTypes from "prop-types";

const redditLinkFormatter = link => `https://www.reddit.com${link}`;

export const Card = ({ image, title, numberOfComments, link }) => (
  <div>
    {image && <img src={image} alt="" />}
    <div>{title}</div>
    <div>Numbers of comments: {numberOfComments}</div>
    <a href={redditLinkFormatter(link)} target="_blanc">
      Link
    </a>
  </div>
);

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  numberOfComments: PropTypes.string,
  link: PropTypes.string
};
