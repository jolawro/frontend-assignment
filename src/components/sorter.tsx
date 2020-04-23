import React from "react";
type SortingOrderProps = {
  sortingOrder: string;
  toggleSortingOrder: () => void;
};
export const Sorter = (props: SortingOrderProps) => (
  <div>
    <p>Sort by:</p>
    <form>
      <label>
        {props.sortingOrder === "asc" ? "Oldest" : "Newest"}
        <button type="button" onClick={props.toggleSortingOrder}>
          <span>
            {props.sortingOrder === "asc" ? (
              <i className="material-icons">expand_less</i>
            ) : (
              <i className="material-icons">expand_more</i>
            )}
          </span>
        </button>
      </label>
    </form>
  </div>
);
