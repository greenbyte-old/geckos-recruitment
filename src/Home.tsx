import { TerraCheckbox, TerraHeading } from "./terra/src";
import VacationLocation from "./VacationLocation";

function Home() {
  return (
    <>
      <div className="start">
        <div className="readable-text">
          <TerraHeading level={1}>Hello! 👋</TerraHeading>
          <div className="ingress">
            <img src="geckos.png" alt="Geckos logo" width="100px" />
            <div>
              <p>Welcome to our mob session!</p>

              <p>
                In our team we use mob programming as a way to learn from each
                other and use everyone's minds to create solutions with the
                highest value.
              </p>
            </div>
          </div>
          <TerraHeading level={3}>Team mission</TerraHeading>
          <p>
            We are a platform team serving the rest of the organization. That
            means that our users consists of both end-users using our products
            and developers developing them.
          </p>
          <p className="team-mission">
            "To provide a modern, consistent up-to-date developer experience for
            Greenbyters, and a good customer experience of the platform."
          </p>
          <TerraHeading level={3}>Team values</TerraHeading>
          <p>We value maintainable, testable and clean code.</p>
          <p>
            We also value accessible, composable and testable components. We
            belive that components, in almost all cases, should be pure and
            controlled.
          </p>
          <TerraHeading level={2}>Our job here today</TerraHeading>
          <p>
            Our job here today is to improve this web application in various
            ways. Our Product Manager is unfortunately (for us) on vacation, so
            it will be up to us to decide the priority of the items on the
            board.
          </p>
          <p>In this context it's worth knowing that:</p>
          <ul>
            <li>
              We don't need to implement everything we talk about, the important
              thing is that we reason about the problems together so we all
              share a common understanding of the problem and possible
              solutions.
            </li>
            <li>
              We have a design system called Terra where our reusable components
              reside. Everything related to this is located in the{" "}
              <code>./src/terra</code> folder
            </li>
            <li>
              Design system components are demonstrated in our Playground which
              can be found at the bottom of this page.
            </li>
          </ul>
          <VacationLocation />
        </div>
        <div className="board">
          <TerraHeading level={1}>Board</TerraHeading>
          <div className="task-cards">
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

              <div>
                <br />
                Notes: Accessibility, real DOM elements or not, tests ...?
              </div>

              <div className="task-card-status in-progress">
                <div className="task-card-status-text">In progress</div>
                <div className="task-card-status-bar"></div>
              </div>
            </div>

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
                can we make the request and where do we store the result?
              </p>

              <div className="task-card-status not-started">
                <div className="task-card-status-text">Not started</div>
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
      <div className="playground">
        <TerraHeading level={1}>Design system playground</TerraHeading>

        <p>
          This is our playground. We use it to display and test Terra
          components.
        </p>

        <h2>Heading</h2>
        <TerraHeading level={1}>Heading 1</TerraHeading>
        <TerraHeading level={2}>Heading 2</TerraHeading>
        <TerraHeading level={3}>Heading 3</TerraHeading>
        <TerraHeading level={4}>Heading 4</TerraHeading>

        <hr />
        <h2>Checkbox</h2>

        <p>Not done yet.</p>
        <TerraCheckbox />
      </div>
    </>
  );
}

export default Home;