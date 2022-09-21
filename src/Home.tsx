import { TerraHeading } from "./terra/src";

function Home() {
  return (
    <>
      <div className="start">
        <div className="board">
          <TerraHeading level={1}>Board</TerraHeading>

          <div className="task-cards">
            <div className="task-card">
              <TerraHeading level={4}>
                Increase the code's maintainability and reusability
              </TerraHeading>
              <p>
                During our latest demo we realized that the markup serving our
                web application has a lot of duplicated html. We would like to
                explore how this can be reduced to increase the code's
                maintainability and reusability. Maybe some elements can be
                extracted into components? If yes, at what level?
              </p>

              <p>
                Especially the{" "}
                <strong>
                  <code>Home</code>
                </strong>{" "}
                component seem to be in need of some cleaning ...
              </p>

              <p>Some questions that are still open:</p>

              <ul>
                <li>Maybe some elements can be extracted into components?</li>
                <li>How small/big components do we want?</li>
                <li>
                  What components belong in the product and what components
                  belong in the design system?
                </li>
                <li>
                  Can we do something about the styling? Is there a smart way of
                  only having reused values, e.g. colors, defined once?
                </li>
              </ul>

              <div className="task-card-status not-started">
                <div className="task-card-status-text">Not started</div>
                <div className="task-card-status-bar"></div>
              </div>
            </div>

            <div className="task-card">
              <TerraHeading level={4}>Where to store data?</TerraHeading>
              <p>
                Other teams within the organization have built a new
                micro-service that holds data related to our Product Manager's
                vacation. This information is already displayed in the left side
                of this page, but our Product Manager wants to display this data
                at the top of the page too so nobody misses it.
              </p>

              <p>
                We don't want to make multiple requests to the already
                heavily-loaded <code>getVacationStatus() function</code>. Where
                can we make the request and where do we store the result so it
                can be displayed in multiple places?
              </p>

              <div className="task-card-status not-started">
                <div className="task-card-status-text">Not started</div>
                <div className="task-card-status-bar"></div>
              </div>
            </div>

            <div className="task-card">
              <TerraHeading level={4}>
                Create a new design system component: checkbox
              </TerraHeading>
              <p>
                One component our product misses greatly is a checkbox that
                follows the look and feel of the application. We have started
                implementing this component in our design system{" "}
                <strong>Terra</strong> but there are still some pieces missing.
              </p>
              <p>
                As always when developing components in the design system
                component we believe the following aspects are important:
              </p>
              <ul>
                <li>The component should be tested</li>
                <li>The component should be typed</li>
                <li>The component shoud be pure and controlled</li>
              </ul>

              <div className="task-card-status in-progress">
                <div className="task-card-status-text">In progress</div>
                <div className="task-card-status-bar"></div>
              </div>
            </div>

            <div className="task-card">
              <TerraHeading level={4}>System owner</TerraHeading>
              <p>
                Since Geckos is a platform team we spend time on making sure the
                platform and its code is in good shape. This task is for
                anything we feel needs to be done in the code base and does not
                come from our Product Owner.
              </p>

              <p>What do we want to improve on?</p>

              <ul>
                <li>Maybe we want to improve the accessibility?</li>
                <li>Do we want to investigate different testing techniques?</li>
                <li>
                  Do we have any security vulnerabilities in our code (or in our
                  dependencies?)
                </li>
                <li>
                  Has any of our frameworks released new versions recently that
                  we want to try out or upgrade to?
                </li>
              </ul>

              <div className="task-card-status not-started">
                <div className="task-card-status-text">Not started</div>
                <div className="task-card-status-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
