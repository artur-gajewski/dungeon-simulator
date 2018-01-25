import React, { Component } from 'react';
import Navigation from '../components/Navigation';

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />

                <div className="hero">
                  <h2>Character sheet and dice ready?</h2>
                  <p>Play role games without a dungeon master</p>
                </div>

                <div id="main-content">
                    <article>
                        <h2>This is a page title</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan venenatis libero, consectetur euismod urna scelerisque et. Curabitur quis turpis sed neque convallis convallis sit amet vitae nisi. Praesent tincidunt sapien id urna lobortis, eu mattis felis elementum. Mauris pretium lectus orci, nec volutpat nulla vestibulum a. Phasellus vulputate, odio nec pellentesque interdum, odio magna viverra lectus, in facilisis risus sapien sed mauris. Ut cursus magna vitae dolor aliquet interdum. Curabitur aliquet velit ac risus convallis, in semper nunc hendrerit. Praesent eu mi sodales, molestie tortor ac, egestas turpis. Etiam et mi neque. Nunc non velit at nulla faucibus imperdiet vel quis ipsum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan venenatis libero, consectetur euismod urna scelerisque et. Curabitur quis turpis sed neque convallis convallis sit amet vitae nisi. Praesent tincidunt sapien id urna lobortis, eu mattis felis elementum. Mauris pretium lectus orci, nec volutpat nulla vestibulum a. Phasellus vulputate, odio nec pellentesque interdum, odio magna viverra lectus, in facilisis risus sapien sed mauris. Ut cursus magna vitae dolor aliquet interdum. Curabitur aliquet velit ac risus convallis, in semper nunc hendrerit. Praesent eu mi sodales, molestie tortor ac, egestas turpis. Etiam et mi neque. Nunc non velit at nulla faucibus imperdiet vel quis ipsum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan venenatis libero, consectetur euismod urna scelerisque et. Curabitur quis turpis sed neque convallis convallis sit amet vitae nisi. Praesent tincidunt sapien id urna lobortis, eu mattis felis elementum. Mauris pretium lectus orci, nec volutpat nulla vestibulum a. Phasellus vulputate, odio nec pellentesque interdum, odio magna viverra lectus, in facilisis risus sapien sed mauris. Ut cursus magna vitae dolor aliquet interdum. Curabitur aliquet velit ac risus convallis, in semper nunc hendrerit. Praesent eu mi sodales, molestie tortor ac, egestas turpis. Etiam et mi neque. Nunc non velit at nulla faucibus imperdiet vel quis ipsum.
                        </p>
                    </article>
                </div>
            </div>
        );
    }
}

export default Home;
