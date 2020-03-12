import React, { memo } from "react";
import PropTypes from "prop-types";

const redditLinkFormatter = link => `https://www.reddit.com${link}`;

export const Card = memo(({ image, title, numberOfComments, link }) => (
  <React.Fragment>
    {image && <img src={image} alt="" />}
    <div>
      <b>{title}</b>
    </div>
    <div>Numbers of comments: {numberOfComments}</div>
    <a href={redditLinkFormatter(link)} target="_blanc">
      Link
    </a>
  </React.Fragment>
));

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  numberOfComments: PropTypes.number,
  link: PropTypes.string
};
