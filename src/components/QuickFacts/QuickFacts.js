import land from '../../images/QuickFacts/land.jpg';
import data from '../../images/QuickFacts/land.png';
import cycle from '../../images/QuickFacts/cycle.png';
import recycle from '../../images/QuickFacts/recycle.png';

const QuickFacts = () => (
    <div id="quickFactslider">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Global Electronic Waste Problem</button>
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">What's The Problem?</button>
                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">What's The Solution?</button>
                <button class="nav-link" id="nav-content4-tab" data-bs-toggle="tab" data-bs-target="#nav-content4" type="button" role="tab" aria-controls="nav-content4" aria-selected="false">What's The Outcome?</button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <br />
                <h4>1. Global Ewaste Problem</h4>
                <p>Global e-waste volumes grew by 21% between 2104 and 2019, according to the United Nations, a pace that will lead to a doubling of e-waste in just 16 years. The world discarded 53.6 million tons of e-waste in 2019.</p>
                <img src={data} className="img-fluid" />
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <br />
                <h4>2. What's The Problem?</h4>
                <p>Only 17.4% of e-waste discarded in 2019 was recycled, the United Nations reports</p>
                <img src={land} className="img-fluid" />
            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <br />
                <h4>2. What's The Solution?</h4>
                <p>The United States generated 6.92 million tons of e-waste, about 46 pounds per person, in 2019. It recycled only 15% of the material. We can overturn that individually by properly recycling our electronics after discontinued use.</p>
                <img src={cycle} className="img-fluid" />
            </div>
            <div class="tab-pane fade" id="nav-content4" role="tabpanel" aria-labelledby="nav-content4-tab">
                <br />
                <h4>2. What's The Outcome?</h4>
                <p>What would be the outcome of recycling dying electronics after use? Recycling 1 million laptops saves the energy equivalent to the electricity used by 3,657 U.S. homes in a year, according to the EPA.</p>
                <img src={recycle} className="img-fluid" />
            </div>
        </div>
    </div>
);

export default QuickFacts;