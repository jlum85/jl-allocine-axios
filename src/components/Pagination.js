import React from "react";
import "./Pagination.css";

const Pagination = props => {
  return (
    <>
      <div class="section">
        <div class="demo">
          <nav class="pagination">
            <ol class="r-list pagination__list">
              <li class="pagination__group">
                <a href="#0" class="r-link pagination__point">
                  1
                </a>
              </li>
              <li class="pagination__group">
                <span class="pagination__point" aria-current="page">
                  2
                </span>
              </li>
              <li class="pagination__group">
                <a href="#0" class="r-link pagination__point">
                  3
                </a>
              </li>
            </ol>
            <a
              href="#0"
              class="r-link pagination__control pagination__control_next"
            >
              next
            </a>
          </nav>
        </div>
        <div class="demo">
          <nav class="pagination">
            <a
              href="#0"
              class="r-link pagination__control pagination__control_prev"
            >
              prev
            </a>
            <ol class="r-list pagination__list">
              <li class="pagination__group">
                <a href="#0" class="r-link pagination__point">
                  1
                </a>
              </li>
              <li class="pagination__group">
                <span class="pagination__point" aria-current="page">
                  2
                </span>
              </li>
              <li class="pagination__group">
                <a href="#0" class="r-link pagination__point">
                  3
                </a>
              </li>
            </ol>
            <a
              href="#0"
              class="r-link pagination__control pagination__control_next"
            >
              next
            </a>
          </nav>
        </div>
        <div class="demo">
          <nav class="pagination">
            <a
              href="#0"
              class="r-link pagination__control pagination__control_prev"
            >
              prev
            </a>
            <ol class="r-list pagination__list">
              <li class="pagination__group">
                <a href="#0" class="r-link pagination__point">
                  1
                </a>
              </li>
              <li class="pagination__group">
                <span class="pagination__point" aria-current="page">
                  2
                </span>
              </li>
              <li class="pagination__group">
                <a href="#0" class="r-link pagination__point">
                  3
                </a>
              </li>
            </ol>
          </nav>
        </div>
        <div class="demo">
          <nav class="pagination">
            <ol class="r-list pagination__list">
              <li class="pagination__group">
                <a href="#0" class="r-link pagination__point">
                  1
                </a>
              </li>
              <li class="pagination__group">
                <span class="pagination__point" aria-current="page">
                  2
                </span>
              </li>
              <li class="pagination__group">
                <a href="#0" class="r-link pagination__point">
                  3
                </a>
              </li>
            </ol>
            <a
              href="#0"
              class="r-link pagination__control pagination__control_next"
            >
              next
            </a>
          </nav>
        </div>
        <div class="demo">
          <nav class="pagination">
            <a
              href="#0"
              class="r-link pagination__control pagination__control_prev"
            >
              prev
            </a>
            <ol class="r-list pagination__list">
              <li class="pagination__group">
                <a href="#0" class="r-link pagination__point">
                  1
                </a>
              </li>
              <li class="pagination__group">
                <span class="pagination__point" aria-current="page">
                  2
                </span>
              </li>
              <li class="pagination__group">
                <a href="#0" class="r-link pagination__point">
                  3
                </a>
              </li>
            </ol>
            <a
              href="#0"
              class="r-link pagination__control pagination__control_next"
            >
              next
            </a>
          </nav>
        </div>
        <div class="demo">
          <nav class="pagination">
            <a
              href="#0"
              class="r-link pagination__control pagination__control_prev"
            >
              prev
            </a>
            <ol class="r-list pagination__list">
              <li class="pagination__group">
                <a href="#0" class="r-link pagination__point">
                  1
                </a>
              </li>
              <li class="pagination__group">
                <span class="pagination__point" aria-current="page">
                  2
                </span>
              </li>
              <li class="pagination__group">
                <a href="#0" class="r-link pagination__point">
                  3
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Pagination;
