import React from 'react';
import { useMemo } from "react";
import "./LeftContainer.css";

const LeftContainer = ({ propBackgroundColor, propColor }) => {
  const filterBrowseInteractionStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const adventureStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="left5">
      <div className="sort1">
        <div className="sortbyheader3">
          <div className="sort-by2">Sort By</div>
          <div className="ascendingdescendinginteraction2">
            <img className="vector-icon41" alt="" src="/vector25.svg" />
            <img className="vector-icon41" alt="" src="/vector26.svg" />
          </div>
        </div>
        <div className="sortfieldsinteraction1">
          <div className="horizontallist2">
            <div className="rating22">
              <div className="button8" />
              <div className="rating23">Rating</div>
            </div>
            <div className="rating22">
              <div className="button8" />
              <div className="popularity5">Popularity</div>
            </div>
          </div>
          <div className="horizontallist3">
            <div className="rating22">
              <div className="button8" />
              <div className="releasedate3">Release Date</div>
            </div>
            <div className="rating22">
              <div className="button8" />
              <div className="alphabetical1">Alphabetical</div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter2">
        <div className="filterheader1">
          <div className="filter3">Filter</div>
          <img className="vector-icon43" alt="" src="/vector27.svg" />
        </div>
        <div className="genretags2">
          <div className="horizontalrow15">
            <div
              className="filterbrowseinteraction42"
              style={filterBrowseInteractionStyle}
            >
              <div className="adventure48" style={adventureStyle}>
                Adventure
              </div>
            </div>
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
          </div>
          <div className="horizontalrow15">
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
          </div>
          <div className="horizontalrow15">
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
          </div>
          <div className="horizontalrow15">
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
          </div>
          <div className="horizontalrow15">
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
          </div>
          <div className="horizontalrow15">
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
          </div>
          <div className="horizontalrow15">
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
            <div className="filterbrowseinteraction43">
              <div className="adventure48">Adventure</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
