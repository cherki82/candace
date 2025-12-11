---
title: "Entities"
---

_Total entities: 1018_

> **Note:** Entities are extracted automatically using AI/NLP. Some identifications may be incorrect or incomplete.

<div class="page-filter-container">
  <input type="text" class="page-filter" placeholder="Filter entities..." autocomplete="off">
  <span class="filter-clear" title="Clear filter">×</span>
  <span class="filter-count"></span>
</div>

<style>
.page-filter-container { position: relative; margin-bottom: 1em; }
.page-filter { width: 100%; padding: 0.5em 2em 0.5em 0.8em; border: 1px solid var(--gray); border-radius: 4px; font-size: 1em; background: var(--light); color: var(--dark); box-sizing: border-box; }
.page-filter:focus { outline: none; border-color: var(--secondary); }
.filter-clear { position: absolute; right: 0.6em; top: 50%; transform: translateY(-50%); cursor: pointer; color: var(--gray); font-size: 1.2em; display: none; }
.filter-clear:hover { color: var(--dark); }
.filter-count { font-size: 0.85em; color: var(--gray); margin-left: 0.5em; }
.filter-hidden { display: none !important; }
.filter-item { }
</style>



<input type="radio" id="tab-person" name="entity-tab" checked class="tab-radio">
<input type="radio" id="tab-org" name="entity-tab" class="tab-radio">
<input type="radio" id="tab-gpe" name="entity-tab" class="tab-radio">
<input type="radio" id="tab-event" name="entity-tab" class="tab-radio">
<input type="radio" id="tab-concept" name="entity-tab" class="tab-radio">
<input type="radio" id="tab-date" name="entity-tab" class="tab-radio">
<input type="radio" id="tab-vehicle" name="entity-tab" class="tab-radio">
<input type="radio" id="tab-work" name="entity-tab" class="tab-radio">
<input type="radio" id="tab-law" name="entity-tab" class="tab-radio">
<input type="radio" id="tab-anonymous_source" name="entity-tab" class="tab-radio">

<div class="tab-controls">
  <label for="tab-person" class="tab-btn">People (438)</label>
  <label for="tab-org" class="tab-btn">Organizations (269)</label>
  <label for="tab-gpe" class="tab-btn">Places (152)</label>
  <label for="tab-event" class="tab-btn">Events (19)</label>
  <label for="tab-concept" class="tab-btn">Concepts (23)</label>
  <label for="tab-date" class="tab-btn">Dates (54)</label>
  <label for="tab-vehicle" class="tab-btn">Vehicles (5)</label>
  <label for="tab-work" class="tab-btn">Works & Media (33)</label>
  <label for="tab-law" class="tab-btn">Laws & Legislation (2)</label>
  <label for="tab-anonymous_source" class="tab-btn">Anonymous Sources (23)</label>
</div>

<style>
.tab-radio { position: absolute; opacity: 0; pointer-events: none; }
.tab-controls { margin-bottom: 1.5em; border-bottom: 2px solid var(--lightgray); display: flex; flex-wrap: wrap; gap: 0.25em; }
.tab-btn { display: inline-block; padding: 0.5em 1em; cursor: pointer; border: 2px solid var(--darkgray); border-bottom: none; border-radius: 6px 6px 0 0; background: var(--darkgray); color: var(--light); user-select: none; position: relative; top: 2px; font-size: 0.9em; margin-bottom: -2px; transition: all 0.15s ease; }
.tab-btn:hover { background: var(--gray); color: var(--light); }
.tab-content { display: none; }
#tab-person:checked ~ .tab-content-person { display: block; }
#tab-person:checked ~ .tab-controls label[for="tab-person"] { background: var(--light); border-color: var(--secondary); border-bottom: 2px solid var(--light); color: var(--dark); font-weight: 600; }
#tab-org:checked ~ .tab-content-org { display: block; }
#tab-org:checked ~ .tab-controls label[for="tab-org"] { background: var(--light); border-color: var(--secondary); border-bottom: 2px solid var(--light); color: var(--dark); font-weight: 600; }
#tab-gpe:checked ~ .tab-content-gpe { display: block; }
#tab-gpe:checked ~ .tab-controls label[for="tab-gpe"] { background: var(--light); border-color: var(--secondary); border-bottom: 2px solid var(--light); color: var(--dark); font-weight: 600; }
#tab-event:checked ~ .tab-content-event { display: block; }
#tab-event:checked ~ .tab-controls label[for="tab-event"] { background: var(--light); border-color: var(--secondary); border-bottom: 2px solid var(--light); color: var(--dark); font-weight: 600; }
#tab-concept:checked ~ .tab-content-concept { display: block; }
#tab-concept:checked ~ .tab-controls label[for="tab-concept"] { background: var(--light); border-color: var(--secondary); border-bottom: 2px solid var(--light); color: var(--dark); font-weight: 600; }
#tab-date:checked ~ .tab-content-date { display: block; }
#tab-date:checked ~ .tab-controls label[for="tab-date"] { background: var(--light); border-color: var(--secondary); border-bottom: 2px solid var(--light); color: var(--dark); font-weight: 600; }
#tab-vehicle:checked ~ .tab-content-vehicle { display: block; }
#tab-vehicle:checked ~ .tab-controls label[for="tab-vehicle"] { background: var(--light); border-color: var(--secondary); border-bottom: 2px solid var(--light); color: var(--dark); font-weight: 600; }
#tab-work:checked ~ .tab-content-work { display: block; }
#tab-work:checked ~ .tab-controls label[for="tab-work"] { background: var(--light); border-color: var(--secondary); border-bottom: 2px solid var(--light); color: var(--dark); font-weight: 600; }
#tab-law:checked ~ .tab-content-law { display: block; }
#tab-law:checked ~ .tab-controls label[for="tab-law"] { background: var(--light); border-color: var(--secondary); border-bottom: 2px solid var(--light); color: var(--dark); font-weight: 600; }
#tab-anonymous_source:checked ~ .tab-content-anonymous_source { display: block; }
#tab-anonymous_source:checked ~ .tab-controls label[for="tab-anonymous_source"] { background: var(--light); border-color: var(--secondary); border-bottom: 2px solid var(--light); color: var(--dark); font-weight: 600; }
</style>

<div class="tab-content tab-content-person">

_438 peoples sorted by most mentioned_

<div class="filter-item">

- [Charlie Kirk](/entities/person-charlie-kirk.md) (2455 mentions)

</div>
<div class="filter-item">

- [Candace Owens](/entities/person-candace-owens.md) (951 mentions)

</div>
<div class="filter-item">

- [Tucker Carlson](/entities/person-tucker-carlson.md) (333 mentions)

</div>
<div class="filter-item">

- [Tyler Robinson](/entities/person-tyler-robinson.md) (315 mentions)

</div>
<div class="filter-item">

- [Erika Kirk](/entities/person-erika-kirk.md) (253 mentions)

</div>
<div class="filter-item">

- [Mikey McCoy](/entities/person-mikey-mccoy.md) (185 mentions)

</div>
<div class="filter-item">

- [Donald Trump](/entities/person-donald-trump.md) (180 mentions)

</div>
<div class="filter-item">

- [Benjamin Netanyahu](/entities/person-benjamin-netanyahu.md) (159 mentions)

</div>
<div class="filter-item">

- [Brigitte Macron](/entities/person-brigitte-macron.md) (159 mentions)

</div>
<div class="filter-item">

- [Megyn Kelly](/entities/person-megyn-kelly.md) (126 mentions)

</div>
<div class="filter-item">

- [Josh Hammer](/entities/person-josh-hammer.md) (123 mentions)

</div>
<div class="filter-item">

- [Rob McCoy](/entities/person-rob-mccoy.md) (117 mentions)

</div>
<div class="filter-item">

- [Lance Wallnau](/entities/person-lance-wallnau.md) (114 mentions)

</div>
<div class="filter-item">

- [Ben Shapiro](/entities/person-ben-shapiro.md) (113 mentions)

</div>
<div class="filter-item">

- [Andrew Kolvet](/entities/person-andrew-kolvet.md) (108 mentions)

</div>
<div class="filter-item">

- [Kash Patel](/entities/person-kash-patel.md) (107 mentions)

</div>
<div class="filter-item">

- [Kanye West](/entities/person-kanye-west.md) (94 mentions)

</div>
<div class="filter-item">

- [Emmanuel Macron](/entities/person-emmanuel-macron.md) (93 mentions)

</div>
<div class="filter-item">

- [Jeffrey Epstein](/entities/person-jeffrey-epstein.md) (83 mentions)

</div>
<div class="filter-item">

- [Blake Neff](/entities/person-blake-neff.md) (71 mentions)

</div>
<div class="filter-item">

- [Nick Fuentes](/entities/person-nick-fuentes.md) (71 mentions)

</div>
<div class="filter-item">

- [Bill Ackman](/entities/person-bill-ackman.md) (60 mentions)

</div>
<div class="filter-item">

- [Phil Lyman](/entities/person-phil-lyman.md) (57 mentions)

</div>
<div class="filter-item">

- [Tyler Bowyer](/entities/person-tyler-bowyer.md) (50 mentions)

</div>
<div class="filter-item">

- [George Zinn](/entities/person-george-zinn.md) (49 mentions)

</div>
<div class="filter-item">

- [Seth Dillon](/entities/person-seth-dillon.md) (48 mentions)

</div>
<div class="filter-item">

- [John F. Kennedy](/entities/person-john-f-kennedy.md) (47 mentions)

</div>
<div class="filter-item">

- [Frank Turek](/entities/person-frank-turek.md) (44 mentions)

</div>
<div class="filter-item">

- [Lance Twiggs](/entities/person-lance-twiggs.md) (44 mentions)

</div>
<div class="filter-item">

- [Allie Beth Stuckey](/entities/person-allie-beth-stuckey.md) (41 mentions)

</div>
<div class="filter-item">

- [Jesus Christ](/entities/person-jesus-christ.md) (36 mentions)

</div>
<div class="filter-item">

- [Tim Pool](/entities/person-tim-pool.md) (36 mentions)

</div>
<div class="filter-item">

- [Governor Cox](/entities/person-governor-cox.md) (34 mentions)

</div>
<div class="filter-item">

- [Sigmund Freud](/entities/person-sigmund-freud.md) (33 mentions)

</div>
<div class="filter-item">

- [Skylar](/entities/person-skylar.md) (32 mentions)

</div>
<div class="filter-item">

- [Brian Harpole](/entities/person-brian-harpole.md) (30 mentions)

</div>
<div class="filter-item">

- [Alex Clark](/entities/person-alex-clark.md) (29 mentions)

</div>
<div class="filter-item">

- [Lou Taylor](/entities/person-lou-taylor.md) (28 mentions)

</div>
<div class="filter-item">

- [Mamdani](/entities/person-mamdani.md) (27 mentions)

</div>
<div class="filter-item">

- [Dave Smith](/entities/person-dave-smith.md) (26 mentions)

</div>
<div class="filter-item">

- [George Farmer](/entities/person-george-farmer.md) (25 mentions)

</div>
<div class="filter-item">

- [Brett Cooper](/entities/person-brett-cooper.md) (23 mentions)

</div>
<div class="filter-item">

- [Ian Carroll](/entities/person-ian-carroll.md) (22 mentions)

</div>
<div class="filter-item">

- [Tiffany Peterson Barker](/entities/person-tiffany-peterson-barker.md) (21 mentions)

</div>
<div class="filter-item">

- [Bari Weiss](/entities/person-bari-weiss.md) (20 mentions)

</div>
<div class="filter-item">

- [Donald Trump Jr.](/entities/person-donald-trump-jr.md) (20 mentions)

</div>
<div class="filter-item">

- [Randy Fine](/entities/person-randy-fine.md) (20 mentions)

</div>
<div class="filter-item">

- [Jack Hibbs](/entities/person-jack-hibbs.md) (19 mentions)

</div>
<div class="filter-item">

- [Tim Dillon](/entities/person-tim-dillon.md) (19 mentions)

</div>
<div class="filter-item">

- [Adolf Hitler](/entities/person-adolf-hitler.md) (18 mentions)

</div>
<div class="filter-item">

- [Britney Spears](/entities/person-britney-spears.md) (18 mentions)

</div>
<div class="filter-item">

- [Captain Adam Neff](/entities/person-captain-adam-neff.md) (18 mentions)

</div>
<div class="filter-item">

- [Irina Zarutska](/entities/person-irina-zarutska.md) (18 mentions)

</div>
<div class="filter-item">

- [Jean-Michel Trogneux](/entities/person-jean-michel-trogneux.md) (18 mentions)

</div>
<div class="filter-item">

- [Laura Loomer](/entities/person-laura-loomer.md) (17 mentions)

</div>
<div class="filter-item">

- [Patrick Bet-David](/entities/person-patrick-bet-david.md) (17 mentions)

</div>
<div class="filter-item">

- [Sean Feucht](/entities/person-sean-feucht.md) (17 mentions)

</div>
<div class="filter-item">

- [Xavier DeRusso](/entities/person-xavier-derusso.md) (17 mentions)

</div>
<div class="filter-item">

- [Jesse Watters](/entities/person-jesse-watters.md) (16 mentions)

</div>
<div class="filter-item">

- [Shawn Ryan](/entities/person-shawn-ryan.md) (15 mentions)

</div>
<div class="filter-item">

- [Adam Sosnick](/entities/person-adam-sosnick.md) (14 mentions)

</div>
<div class="filter-item">

- [Burton Hibbs](/entities/person-burton-hibbs.md) (14 mentions)

</div>
<div class="filter-item">

- [Mike Mitchell](/entities/person-mike-mitchell.md) (14 mentions)

</div>
<div class="filter-item">

- [The Game](/entities/person-the-game.md) (14 mentions)

</div>
<div class="filter-item">

- [Thomas Matthew Crooks](/entities/person-thomas-matthew-crooks.md) (14 mentions)

</div>
<div class="filter-item">

- [Cam Higby](/entities/person-cam-higby.md) (13 mentions)

</div>
<div class="filter-item">

- [Dan Flood](/entities/person-dan-flood.md) (13 mentions)

</div>
<div class="filter-item">

- [Harry Myers](/entities/person-harry-myers.md) (13 mentions)

</div>
<div class="filter-item">

- [Lance](/entities/person-lance-robinson-boyfriend.md) (13 mentions)

</div>
<div class="filter-item">

- [Skyler](/entities/person-skyler.md) (13 mentions)

</div>
<div class="filter-item">

- [Alex Jones](/entities/person-alex-jones.md) (12 mentions)

</div>
<div class="filter-item">

- [Eric Bolling](/entities/person-eric-bolling.md) (12 mentions)

</div>
<div class="filter-item">

- [Jimmy Kimmel](/entities/person-jimmy-kimmel.md) (12 mentions)

</div>
<div class="filter-item">

- [Justin Streiff](/entities/person-justin-strief.md) (12 mentions)

</div>
<div class="filter-item">

- [Mia Grant](/entities/person-mia-grant.md) (12 mentions)

</div>
<div class="filter-item">

- [Stacey Sheridan](/entities/person-stacey-sheridan.md) (12 mentions)

</div>
<div class="filter-item">

- [Elon Musk](/entities/person-elon-musk.md) (11 mentions)

</div>
<div class="filter-item">

- [Jack Posobiec](/entities/person-jack-posobiec.md) (11 mentions)

</div>
<div class="filter-item">

- [Joe Rogan](/entities/person-joe-rogan.md) (11 mentions)

</div>
<div class="filter-item">

- [Max Blumenthal](/entities/person-max-blumenthal.md) (11 mentions)

</div>
<div class="filter-item">

- [Norman Finkelstein](/entities/person-norman-finkelstein.md) (11 mentions)

</div>
<div class="filter-item">

- [Thomas Crooks](/entities/person-thomas-crooks.md) (11 mentions)

</div>
<div class="filter-item">

- [Walid Mahmood](/entities/person-walid-mahmood.md) (11 mentions)

</div>
<div class="filter-item">

- [Elle Steele](/entities/person-elle-steele.md) (10 mentions)

</div>
<div class="filter-item">

- [Matt Walsh](/entities/person-matt-walsh.md) (10 mentions)

</div>
<div class="filter-item">

- [Melissa (Village Crazy Lady)](/entities/person-melissa-village-crazy-lady.md) (10 mentions)

</div>
<div class="filter-item">

- [Milo Yiannopoulos](/entities/person-milo-yiannopoulos.md) (10 mentions)

</div>
<div class="filter-item">

- [Nate Brooksby](/entities/person-nate-brooksby.md) (10 mentions)

</div>
<div class="filter-item">

- [Ted Cruz](/entities/person-ted-cruz.md) (10 mentions)

</div>
<div class="filter-item">

- [Xavier Poussard](/entities/person-xavier-poussard.md) (10 mentions)

</div>
<div class="filter-item">

- [Carrie Smith](/entities/person-carrie-smith.md) (9 mentions)

</div>
<div class="filter-item">

- [Courtney Love](/entities/person-courtney-love.md) (9 mentions)

</div>
<div class="filter-item">

- [Derek Maxfield](/entities/person-derek-maxfield.md) (9 mentions)

</div>
<div class="filter-item">

- [Lyndon Baines Johnson](/entities/person-lyndon-baines-johnson.md) (9 mentions)

</div>
<div class="filter-item">

- [Pierre Samuel du Pont de Nemours](/entities/person-pierre-samuel-du-pont-de-nemours.md) (9 mentions)

</div>
<div class="filter-item">

- [Rabbi Pesach Wolicki](/entities/person-rabbi-pesach-wolicki.md) (9 mentions)

</div>
<div class="filter-item">

- [Taylor Swift](/entities/person-taylor-swift.md) (9 mentions)

</div>
<div class="filter-item">

- [Zohran Mamdani](/entities/person-zohran-mamdani.md) (9 mentions)

</div>
<div class="filter-item">

- [Dinesh D'Souza](/entities/person-dinesh-d-souza.md) (8 mentions)

</div>
<div class="filter-item">

- [Elijah Schaffer](/entities/person-elijah-schaffer.md) (8 mentions)

</div>
<div class="filter-item">

- [Eric Trump](/entities/person-eric-trump.md) (8 mentions)

</div>
<div class="filter-item">

- [George H.W. Bush](/entities/person-george-hw-bush.md) (8 mentions)

</div>
<div class="filter-item">

- [JD Vance](/entities/person-jd-vance.md) (8 mentions)

</div>
<div class="filter-item">

- [Jeremy Boreing](/entities/person-jeremy-boreing.md) (8 mentions)

</div>
<div class="filter-item">

- [Jordan Peterson](/entities/person-jordan-peterson.md) (8 mentions)

</div>
<div class="filter-item">

- [Lila Rose](/entities/person-lila-rose.md) (8 mentions)

</div>
<div class="filter-item">

- [Marissa Streit](/entities/person-marissa-streit.md) (8 mentions)

</div>
<div class="filter-item">

- [Mark Levin](/entities/person-mark-levin.md) (8 mentions)

</div>
<div class="filter-item">

- [Martin Luther King Jr.](/entities/person-martin-luther-king-jr.md) (8 mentions)

</div>
<div class="filter-item">

- [Michael Knowles](/entities/person-michael-knowles.md) (8 mentions)

</div>
<div class="filter-item">

- [Michael Savage](/entities/person-michael-savage.md) (8 mentions)

</div>
<div class="filter-item">

- [Mike Cernovich](/entities/person-mike-cernovich.md) (8 mentions)

</div>
<div class="filter-item">

- [Robbie Hilde](/entities/person-robbie-hilde.md) (8 mentions)

</div>
<div class="filter-item">

- [Saint Michael](/entities/person-saint-michael.md) (8 mentions)

</div>
<div class="filter-item">

- [Susie Wiles](/entities/person-susie-wiles.md) (8 mentions)

</div>
<div class="filter-item">

- [Tulsi Gabbard](/entities/person-tulsi-gabbard.md) (8 mentions)

</div>
<div class="filter-item">

- [Blake Lively](/entities/person-blake-lively.md) (7 mentions)

</div>
<div class="filter-item">

- [Dave Rubin](/entities/person-dave-rubin.md) (7 mentions)

</div>
<div class="filter-item">

- [Diddy](/entities/person-diddy.md) (7 mentions)

</div>
<div class="filter-item">

- [Jay-Z](/entities/person-jay-z.md) (7 mentions)

</div>
<div class="filter-item">

- [Joe Biden](/entities/person-joe-biden.md) (7 mentions)

</div>
<div class="filter-item">

- [Joe Kent](/entities/person-joe-kent.md) (7 mentions)

</div>
<div class="filter-item">

- [Kamala Harris](/entities/person-kamala-harris.md) (7 mentions)

</div>
<div class="filter-item">

- [Leo Frank](/entities/person-leo-frank.md) (7 mentions)

</div>
<div class="filter-item">

- [Lindsey Graham](/entities/person-lindsey-graham.md) (7 mentions)

</div>
<div class="filter-item">

- [Mary Phagan](/entities/person-mary-phagan.md) (7 mentions)

</div>
<div class="filter-item">

- [Matt Gaetz](/entities/person-matt-gaetz.md) (7 mentions)

</div>
<div class="filter-item">

- [Mike Huckabee](/entities/person-mike-huckabee.md) (7 mentions)

</div>
<div class="filter-item">

- [Pierre Falcone](/entities/person-pierre-falcone.md) (7 mentions)

</div>
<div class="filter-item">

- [Sam Parker](/entities/person-sam-parker.md) (7 mentions)

</div>
<div class="filter-item">

- [Volodymyr Zelensky](/entities/person-volodymyr-zelensky.md) (7 mentions)

</div>
<div class="filter-item">

- [Adam Bartholomew](/entities/person-adam-bartholomew.md) (6 mentions)

</div>
<div class="filter-item">

- [Alyssa Cordova](/entities/person-alyssa-cordova.md) (6 mentions)

</div>
<div class="filter-item">

- [Andrew Klavan](/entities/person-andrew-klavan.md) (6 mentions)

</div>
<div class="filter-item">

- [Andrew Tate](/entities/person-andrew-tate.md) (6 mentions)

</div>
<div class="filter-item">

- [Brutus](/entities/person-brutus.md) (6 mentions)

</div>
<div class="filter-item">

- [David Horowitz](/entities/person-david-horowitz.md) (6 mentions)

</div>
<div class="filter-item">

- [Dr. Lee Trotter](/entities/person-dr-lee-trotter.md) (6 mentions)

</div>
<div class="filter-item">

- [George Floyd](/entities/person-george-floyd.md) (6 mentions)

</div>
<div class="filter-item">

- [James O'Keefe](/entities/person-james-o-keefe.md) (6 mentions)

</div>
<div class="filter-item">

- [Joel Osteen](/entities/person-joel-osteen.md) (6 mentions)

</div>
<div class="filter-item">

- [Julius Caesar](/entities/person-julius-caesar.md) (6 mentions)

</div>
<div class="filter-item">

- [Konstantin Kisin](/entities/person-konstantin-kisin.md) (6 mentions)

</div>
<div class="filter-item">

- [Pam Bondi](/entities/person-pam-bondi.md) (6 mentions)

</div>
<div class="filter-item">

- [Ron Paul](/entities/person-ron-paul.md) (6 mentions)

</div>
<div class="filter-item">

- [Ryan Matta](/entities/person-ryan-matta.md) (6 mentions)

</div>
<div class="filter-item">

- [Theo Von](/entities/person-theo-von.md) (6 mentions)

</div>
<div class="filter-item">

- [Alexis Wilkins](/entities/person-alexis-wilkins.md) (5 mentions)

</div>
<div class="filter-item">

- [Bob Evnen](/entities/person-bob-evnen.md) (5 mentions)

</div>
<div class="filter-item">

- [Cooper Brown](/entities/person-cooper-brown.md) (5 mentions)

</div>
<div class="filter-item">

- [David Bakan](/entities/person-david-bakan.md) (5 mentions)

</div>
<div class="filter-item">

- [El Chapo](/entities/person-el-chapo.md) (5 mentions)

</div>
<div class="filter-item">

- [Ghislaine Maxwell](/entities/person-ghislaine-maxwell.md) (5 mentions)

</div>
<div class="filter-item">

- [Greg Gutfeld](/entities/person-greg-gutfeld.md) (5 mentions)

</div>
<div class="filter-item">

- [Greta Van Susteren](/entities/person-greta-van-susteren.md) (5 mentions)

</div>
<div class="filter-item">

- [Harry](/entities/person-harry.md) (5 mentions)

</div>
<div class="filter-item">

- [Jacob Kasparian](/entities/person-jacob-kasparian.md) (5 mentions)

</div>
<div class="filter-item">

- [Jason Chaffetz](/entities/person-jason-chavitz.md) (5 mentions)

</div>
<div class="filter-item">

- [Jeff Long](/entities/person-jeff-long.md) (5 mentions)

</div>
<div class="filter-item">

- [Jonathan Schmidt](/entities/person-jonathan-schmidt.md) (5 mentions)

</div>
<div class="filter-item">

- [Judas](/entities/person-judas.md) (5 mentions)

</div>
<div class="filter-item">

- [Justin Bieber](/entities/person-justin-bieber.md) (5 mentions)

</div>
<div class="filter-item">

- [Lara Trump](/entities/person-lara-trump.md) (5 mentions)

</div>
<div class="filter-item">

- [Scott Adams](/entities/person-scott-adams.md) (5 mentions)

</div>
<div class="filter-item">

- [Shalane Maxfield](/entities/person-shalane-maxfield.md) (5 mentions)

</div>
<div class="filter-item">

- [Shane Lyman](/entities/person-shane-lyman.md) (5 mentions)

</div>
<div class="filter-item">

- [Shaner Broderick](/entities/person-shaner-broderick.md) (5 mentions)

</div>
<div class="filter-item">

- [Steven Crowder](/entities/person-steven-crowder.md) (5 mentions)

</div>
<div class="filter-item">

- [Taylor Lorenz](/entities/person-taylor-lorenz.md) (5 mentions)

</div>
<div class="filter-item">

- [Tim Ballard](/entities/person-tim-ballard.md) (5 mentions)

</div>
<div class="filter-item">

- [Abdel Fattah el-Sisi](/entities/person-abdel-fattah-el-sisi.md) (4 mentions)

</div>
<div class="filter-item">

- [Agatha Christie](/entities/person-agatha-christie.md) (4 mentions)

</div>
<div class="filter-item">

- [Amir](/entities/person-amir.md) (4 mentions)

</div>
<div class="filter-item">

- [Ashton Forbes](/entities/person-ashton-forbes.md) (4 mentions)

</div>
<div class="filter-item">

- [Bashar al-Assad](/entities/person-bashar-al-assad.md) (4 mentions)

</div>
<div class="filter-item">

- [Bella Steele](/entities/person-bella-steele.md) (4 mentions)

</div>
<div class="filter-item">

- [Bethany Frankel](/entities/person-bethany-frankel.md) (4 mentions)

</div>
<div class="filter-item">

- [Bob Coy](/entities/person-bob-coy.md) (4 mentions)

</div>
<div class="filter-item">

- [Bob Schulman](/entities/person-bob-schulman.md) (4 mentions)

</div>
<div class="filter-item">

- [Brandon Tatum](/entities/person-brandon-tatum.md) (4 mentions)

</div>
<div class="filter-item">

- [Brittany Watson](/entities/person-brittany-watson.md) (4 mentions)

</div>
<div class="filter-item">

- [Cardi B](/entities/person-cardi-b.md) (4 mentions)

</div>
<div class="filter-item">

- [Elizabeth McCoy](/entities/person-elizabeth-mccoy.md) (4 mentions)

</div>
<div class="filter-item">

- [Harris Faulkner](/entities/person-harris-faulkner.md) (4 mentions)

</div>
<div class="filter-item">

- [Ivanka Trump](/entities/person-ivanka-trump.md) (4 mentions)

</div>
<div class="filter-item">

- [James Lee](/entities/person-james-lee.md) (4 mentions)

</div>
<div class="filter-item">

- [Jared Kushner](/entities/person-jared-kushner.md) (4 mentions)

</div>
<div class="filter-item">

- [Jeffrey Masson](/entities/person-jeffrey-masson.md) (4 mentions)

</div>
<div class="filter-item">

- [Jimmy Dore](/entities/person-jimmy-dore.md) (4 mentions)

</div>
<div class="filter-item">

- [John McCain](/entities/person-john-mccain.md) (4 mentions)

</div>
<div class="filter-item">

- [Jonathan Pollard](/entities/person-jonathan-pollard.md) (4 mentions)

</div>
<div class="filter-item">

- [Joseph Goebbels](/entities/person-joseph-goebbels.md) (4 mentions)

</div>
<div class="filter-item">

- [Kim Kardashian](/entities/person-kim-kardashian.md) (4 mentions)

</div>
<div class="filter-item">

- [Kurt Cobain](/entities/person-kurt-cobain.md) (4 mentions)

</div>
<div class="filter-item">

- [Marina Mappin](/entities/person-marina-mappin.md) (4 mentions)

</div>
<div class="filter-item">

- [Marjorie Taylor Greene](/entities/person-marjorie-taylor-greene.md) (4 mentions)

</div>
<div class="filter-item">

- [Michael Jackson](/entities/person-michael-jackson.md) (4 mentions)

</div>
<div class="filter-item">

- [Miriam Adelson](/entities/person-miriam-adelson.md) (4 mentions)

</div>
<div class="filter-item">

- [Nehemiah](/entities/person-nehemiah.md) (4 mentions)

</div>
<div class="filter-item">

- [Olivia Bishop](/entities/person-olivia-bishop.md) (4 mentions)

</div>
<div class="filter-item">

- [Pontius Pilate](/entities/person-pontius-pilate.md) (4 mentions)

</div>
<div class="filter-item">

- [Ronald Reagan](/entities/person-ronald-reagan.md) (4 mentions)

</div>
<div class="filter-item">

- [Sherry Steele](/entities/person-sherry-steele.md) (4 mentions)

</div>
<div class="filter-item">

- [Steve Baker](/entities/person-steve-baker.md) (4 mentions)

</div>
<div class="filter-item">

- [Thomas Michael Camino](/entities/person-thomas-michael-camino.md) (4 mentions)

</div>
<div class="filter-item">

- [Vivek Ramaswamy](/entities/person-vivek-ramaswamy.md) (4 mentions)

</div>
<div class="filter-item">

- [Vladimir Putin](/entities/person-vladimir-putin.md) (4 mentions)

</div>
<div class="filter-item">

- [Aesmar](/entities/person-aesmar.md) (3 mentions)

</div>
<div class="filter-item">

- [Al Goldstein](/entities/person-al-goldstein.md) (3 mentions)

</div>
<div class="filter-item">

- [Alex Marlow](/entities/person-alex-marlow.md) (3 mentions)

</div>
<div class="filter-item">

- [Amir Odom](/entities/person-amir-odom.md) (3 mentions)

</div>
<div class="filter-item">

- [Andrew Zenger](/entities/person-andrew-zenger.md) (3 mentions)

</div>
<div class="filter-item">

- [Anna Kasparian](/entities/person-anna-kasparian.md) (3 mentions)

</div>
<div class="filter-item">

- [Arkady Gaidemak](/entities/person-arkady-gaidemak.md) (3 mentions)

</div>
<div class="filter-item">

- [Ashley Reinsberg](/entities/person-ashley-reinsberg.md) (3 mentions)

</div>
<div class="filter-item">

- [Austin Erickson](/entities/person-austin-erickson.md) (3 mentions)

</div>
<div class="filter-item">

- [Barack Obama](/entities/person-barack-obama.md) (3 mentions)

</div>
<div class="filter-item">

- [Bob Bryar](/entities/person-bob-bryar.md) (3 mentions)

</div>
<div class="filter-item">

- [Casey Baugh](/entities/person-casey-baugh.md) (3 mentions)

</div>
<div class="filter-item">

- [Cassie](/entities/person-cassie.md) (3 mentions)

</div>
<div class="filter-item">

- [Chuck Smith](/entities/person-chuck-smith.md) (3 mentions)

</div>
<div class="filter-item">

- [Colby Sessions](/entities/person-colby-sessions.md) (3 mentions)

</div>
<div class="filter-item">

- [Corey Comparatore](/entities/person-corey-comparatore.md) (3 mentions)

</div>
<div class="filter-item">

- [Dana Loesch](/entities/person-dana-loesch.md) (3 mentions)

</div>
<div class="filter-item">

- [David Hogg](/entities/person-david-hogg.md) (3 mentions)

</div>
<div class="filter-item">

- [Dylan Erickson](/entities/person-dylan-erickson.md) (3 mentions)

</div>
<div class="filter-item">

- [Elizabeth Lane](/entities/person-elizabeth-lane.md) (3 mentions)

</div>
<div class="filter-item">

- [Emma Goldman](/entities/person-emma-goldman.md) (3 mentions)

</div>
<div class="filter-item">

- [Emmanuel Behrer](/entities/person-emmanuel-behrer.md) (3 mentions)

</div>
<div class="filter-item">

- [Erin Wexler](/entities/person-erin-wexler.md) (3 mentions)

</div>
<div class="filter-item">

- [Erwin Steele](/entities/person-erwin-steele.md) (3 mentions)

</div>
<div class="filter-item">

- [François Mitterrand](/entities/person-francois-mitterrand.md) (3 mentions)

</div>
<div class="filter-item">

- [Gianmarco Soresi](/entities/person-gianmarco-soresi.md) (3 mentions)

</div>
<div class="filter-item">

- [Glenn Beck](/entities/person-glenn-beck.md) (3 mentions)

</div>
<div class="filter-item">

- [Jesse Keg](/entities/person-jesse-keg.md) (3 mentions)

</div>
<div class="filter-item">

- [Joel Berry](/entities/person-joel-berry.md) (3 mentions)

</div>
<div class="filter-item">

- [Joyce Chernick](/entities/person-joyce-chernick.md) (3 mentions)

</div>
<div class="filter-item">

- [Karoline Leavitt](/entities/person-karoline-leavitt.md) (3 mentions)

</div>
<div class="filter-item">

- [Larry Ellison](/entities/person-larry-ellison.md) (3 mentions)

</div>
<div class="filter-item">

- [Marcus Hale](/entities/person-marcus-hale.md) (3 mentions)

</div>
<div class="filter-item">

- [Meghan Markle](/entities/person-meghan-markle.md) (3 mentions)

</div>
<div class="filter-item">

- [Michael Starr](/entities/person-michael-starr.md) (3 mentions)

</div>
<div class="filter-item">

- [Mohammed bin Salman](/entities/person-mohammed-bin-salman.md) (3 mentions)

</div>
<div class="filter-item">

- [Mr. Brumetz](/entities/person-mr-brumetz.md) (3 mentions)

</div>
<div class="filter-item">

- [Napoleon Bonaparte](/entities/person-napoleon-bonaparte.md) (3 mentions)

</div>
<div class="filter-item">

- [Nathan Livingstone](/entities/person-nathan-livingstone.md) (3 mentions)

</div>
<div class="filter-item">

- [Rick Rubin](/entities/person-rick-rubin.md) (3 mentions)

</div>
<div class="filter-item">

- [Rob O'Neill](/entities/person-rob-oneill.md) (3 mentions)

</div>
<div class="filter-item">

- [Robert Bowles](/entities/person-robert-bowles.md) (3 mentions)

</div>
<div class="filter-item">

- [Robert Maxwell](/entities/person-robert-maxwell.md) (3 mentions)

</div>
<div class="filter-item">

- [Sara Zaafarani Zenzari](/entities/person-sarah-zafrani.md) (3 mentions)

</div>
<div class="filter-item">

- [Sergio Gore](/entities/person-sergio-gore.md) (3 mentions)

</div>
<div class="filter-item">

- [Shawna Rae Kirkhoff](/entities/person-shawna-rae-kirkhoff.md) (3 mentions)

</div>
<div class="filter-item">

- [Shlomo Sand](/entities/person-shlomo-sand.md) (3 mentions)

</div>
<div class="filter-item">

- [Shumway](/entities/person-shumway.md) (3 mentions)

</div>
<div class="filter-item">

- [Skordas](/entities/person-skordas.md) (3 mentions)

</div>
<div class="filter-item">

- [Steve Bannon](/entities/person-steve-bannon.md) (3 mentions)

</div>
<div class="filter-item">

- [Terrell Farnsworth](/entities/person-terrell-farnsworth.md) (3 mentions)

</div>
<div class="filter-item">

- [Theo Vaughn](/entities/person-theo-vaughn.md) (3 mentions)

</div>
<div class="filter-item">

- [Thomas Sowell](/entities/person-thomas-sowell.md) (3 mentions)

</div>
<div class="filter-item">

- [Uvalde Shooter](/entities/person-uvalde-shooter.md) (3 mentions)

</div>
<div class="filter-item">

- [Victoria Churchill](/entities/person-victoria-churchill.md) (3 mentions)

</div>
<div class="filter-item">

- [Yashar Ali](/entities/person-yashar-ali.md) (3 mentions)

</div>
<div class="filter-item">

- [Aaron Wexler](/entities/person-aaron-wexler.md) (2 mentions)

</div>
<div class="filter-item">

- [Abraham Polak](/entities/person-abraham-polak.md) (2 mentions)

</div>
<div class="filter-item">

- [Adam Lanza](/entities/person-adam-lanza.md) (2 mentions)

</div>
<div class="filter-item">

- [Al Sharpton](/entities/person-al-sharpton.md) (2 mentions)

</div>
<div class="filter-item">

- [Alice Marie Johnson](/entities/person-alice-marie-johnson.md) (2 mentions)

</div>
<div class="filter-item">

- [Andrew K. Smith](/entities/person-andrew-k-smith.md) (2 mentions)

</div>
<div class="filter-item">

- [André 3000](/entities/person-andre-3000.md) (2 mentions)

</div>
<div class="filter-item">

- [Andy Cohen](/entities/person-andy-cohen.md) (2 mentions)

</div>
<div class="filter-item">

- [Aubrey Chernick](/entities/person-aubrey-chernick.md) (2 mentions)

</div>
<div class="filter-item">

- [Benny Johnson](/entities/person-benny-johnson.md) (2 mentions)

</div>
<div class="filter-item">

- [Bob Shillman](/entities/person-bob-shillman.md) (2 mentions)

</div>
<div class="filter-item">

- [Brandon Briggs](/entities/person-brandon-briggs.md) (2 mentions)

</div>
<div class="filter-item">

- [Breland Holland](/entities/person-breland-holland.md) (2 mentions)

</div>
<div class="filter-item">

- [Brendan Carr](/entities/person-brendan-carr.md) (2 mentions)

</div>
<div class="filter-item">

- [Brian Mast](/entities/person-brian-mast.md) (2 mentions)

</div>
<div class="filter-item">

- [Brigitte Gabriel](/entities/person-brigitte-gabriel.md) (2 mentions)

</div>
<div class="filter-item">

- [Chris Olsen](/entities/person-chris-olsen.md) (2 mentions)

</div>
<div class="filter-item">

- [Christopher Mosley](/entities/person-christopher-mosley.md) (2 mentions)

</div>
<div class="filter-item">

- [Clay Travis](/entities/person-clay-travis.md) (2 mentions)

</div>
<div class="filter-item">

- [Colin Powell](/entities/person-colin-powell.md) (2 mentions)

</div>
<div class="filter-item">

- [Conrad Flynn](/entities/person-conrad-flynn.md) (2 mentions)

</div>
<div class="filter-item">

- [David Friedman](/entities/person-david-friedman.md) (2 mentions)

</div>
<div class="filter-item">

- [Deb Skates](/entities/person-deb-skates.md) (2 mentions)

</div>
<div class="filter-item">

- [Deborah Lee](/entities/person-deborah-lee.md) (2 mentions)

</div>
<div class="filter-item">

- [Douglas Murray](/entities/person-douglas-murray.md) (2 mentions)

</div>
<div class="filter-item">

- [Dr. Deidre Amaro](/entities/person-dr-deidre-amaro.md) (2 mentions)

</div>
<div class="filter-item">

- [Dr. Lydia Smith-Amaro](/entities/person-dr-lydia-smith-amaro.md) (2 mentions)

</div>
<div class="filter-item">

- [Dwight D. Eisenhower](/entities/person-dwight-eisenhower.md) (2 mentions)

</div>
<div class="filter-item">

- [Emily (Emily Saves America)](/entities/person-emily-saves-america.md) (2 mentions)

</div>
<div class="filter-item">

- [Eminem](/entities/person-eminem.md) (2 mentions)

</div>
<div class="filter-item">

- [Eric Dupond-Moretti](/entities/person-eric-dupond-moretti.md) (2 mentions)

</div>
<div class="filter-item">

- [Eric Weinstein](/entities/person-eric-weinstein.md) (2 mentions)

</div>
<div class="filter-item">

- [Eyal Yakobi](/entities/person-eyal-yakobi.md) (2 mentions)

</div>
<div class="filter-item">

- [Foster Friess](/entities/person-foster-friess.md) (2 mentions)

</div>
<div class="filter-item">

- [George Santos](/entities/person-george-santos.md) (2 mentions)

</div>
<div class="filter-item">

- [George Soros](/entities/person-george-soros.md) (2 mentions)

</div>
<div class="filter-item">

- [George Webb](/entities/person-george-webb.md) (2 mentions)

</div>
<div class="filter-item">

- [George Zimmerman](/entities/person-george-zimmerman.md) (2 mentions)

</div>
<div class="filter-item">

- [Greta Thunberg](/entities/person-greta-thunberg.md) (2 mentions)

</div>
<div class="filter-item">

- [Harley Pasternak](/entities/person-harley-pasternak.md) (2 mentions)

</div>
<div class="filter-item">

- [Hillary Clinton](/entities/person-hillary-clinton.md) (2 mentions)

</div>
<div class="filter-item">

- [Hodge Twins](/entities/person-hodge-twins.md) (2 mentions)

</div>
<div class="filter-item">

- [Irina Matlin](/entities/person-irina-matlin.md) (2 mentions)

</div>
<div class="filter-item">

- [James Gray](/entities/person-james-gray.md) (2 mentions)

</div>
<div class="filter-item">

- [Jean-Michel Jarre](/entities/person-jean-michel-jarre.md) (2 mentions)

</div>
<div class="filter-item">

- [John DuPont](/entities/person-john-dupont.md) (2 mentions)

</div>
<div class="filter-item">

- [John Lewis](/entities/person-john-lewis-daily-wire.md) (2 mentions)

</div>
<div class="filter-item">

- [John Mappin](/entities/person-john-mappin.md) (2 mentions)

</div>
<div class="filter-item">

- [Juergen Buehler](/entities/person-juergen-buehler.md) (2 mentions)

</div>
<div class="filter-item">

- [Justin Baldoni](/entities/person-justin-baldoni.md) (2 mentions)

</div>
<div class="filter-item">

- [Justin Trudeau](/entities/person-justin-trudeau.md) (2 mentions)

</div>
<div class="filter-item">

- [Kathy Bechel](/entities/person-kathy-bechel.md) (2 mentions)

</div>
<div class="filter-item">

- [Kayleigh McEnany](/entities/person-kayleigh-mcenany.md) (2 mentions)

</div>
<div class="filter-item">

- [Kenzie Kinney](/entities/person-kenzie-kinney.md) (2 mentions)

</div>
<div class="filter-item">

- [Kingsley Wilson](/entities/person-kingsley-wilson.md) (2 mentions)

</div>
<div class="filter-item">

- [Kyrie Irving](/entities/person-kyrie-irving.md) (2 mentions)

</div>
<div class="filter-item">

- [Lauren Chen](/entities/person-lauren-chen.md) (2 mentions)

</div>
<div class="filter-item">

- [Lee Harvey Oswald](/entities/person-lee-harvey-oswald.md) (2 mentions)

</div>
<div class="filter-item">

- [Lindsay Lohan](/entities/person-lindsay-lohan.md) (2 mentions)

</div>
<div class="filter-item">

- [Magnus Hirschfeld](/entities/person-magnus-hirschfeld.md) (2 mentions)

</div>
<div class="filter-item">

- [Marc Andreessen](/entities/person-marc-andreessen.md) (2 mentions)

</div>
<div class="filter-item">

- [Margarethe Schurz](/entities/person-margarethe-schurz.md) (2 mentions)

</div>
<div class="filter-item">

- [Maya Angelou](/entities/person-maya-angelou.md) (2 mentions)

</div>
<div class="filter-item">

- [Melissa](/entities/person-melissa.md) (2 mentions)

</div>
<div class="filter-item">

- [Michael Lohan](/entities/person-michael-lohan.md) (2 mentions)

</div>
<div class="filter-item">

- [Mickey Shaw](/entities/person-mickey-shaw.md) (2 mentions)

</div>
<div class="filter-item">

- [Misfit Patriot](/entities/person-misfit-patriot.md) (2 mentions)

</div>
<div class="filter-item">

- [Mitch McConnell](/entities/person-mitch-mcconnell.md) (2 mentions)

</div>
<div class="filter-item">

- [Morgan Ariel](/entities/person-morgan-ariel.md) (2 mentions)

</div>
<div class="filter-item">

- [Natasha Hausdorff](/entities/person-natasha-hausdorff.md) (2 mentions)

</div>
<div class="filter-item">

- [Nikki Haley](/entities/person-nikki-haley.md) (2 mentions)

</div>
<div class="filter-item">

- [Pierre S. du Pont](/entities/person-pierre-s-du-pont.md) (2 mentions)

</div>
<div class="filter-item">

- [Rand Paul](/entities/person-rand-paul.md) (2 mentions)

</div>
<div class="filter-item">

- [Rupert Murdoch](/entities/person-rupert-murdoch.md) (2 mentions)

</div>
<div class="filter-item">

- [Rush Limbaugh](/entities/person-rush-limbaugh.md) (2 mentions)

</div>
<div class="filter-item">

- [Samuel Roth](/entities/person-samuel-roth.md) (2 mentions)

</div>
<div class="filter-item">

- [Sarah Milgram](/entities/person-sarah-milgram.md) (2 mentions)

</div>
<div class="filter-item">

- [Sarah Stockton](/entities/person-sarah-stockton.md) (2 mentions)

</div>
<div class="filter-item">

- [Sean Hannity](/entities/person-sean-hannity.md) (2 mentions)

</div>
<div class="filter-item">

- [Steve Witkoff](/entities/person-steve-witkoff.md) (2 mentions)

</div>
<div class="filter-item">

- [The Quartering](/entities/person-the-quartering.md) (2 mentions)

</div>
<div class="filter-item">

- [Thomas Massie](/entities/person-thomas-massie.md) (2 mentions)

</div>
<div class="filter-item">

- [Timothy McVeigh](/entities/person-timothy-mcveigh.md) (2 mentions)

</div>
<div class="filter-item">

- [Tony Burke](/entities/person-tony-burke.md) (2 mentions)

</div>
<div class="filter-item">

- [Tony F. Graf Jr.](/entities/person-tony-f-graf-jr.md) (2 mentions)

</div>
<div class="filter-item">

- [Wilks Brothers](/entities/person-wilks-brothers.md) (2 mentions)

</div>
<div class="filter-item">

- [Yael Eckstein](/entities/person-yael-eckstein.md) (2 mentions)

</div>
<div class="filter-item">

- [Yaron Lechinsky](/entities/person-yaron-lechinsky.md) (2 mentions)

</div>
<div class="filter-item">

- [Yeshira Sanchez](/entities/person-yeshira-sanchez.md) (2 mentions)

</div>
<div class="filter-item">

- [Zeb Boykin](/entities/person-zeb-boykin.md) (2 mentions)

</div>
<div class="filter-item">

- [Abraham Lincoln](/entities/person-abraham-lincoln.md) (1 mention)

</div>
<div class="filter-item">

- [Ami Kozak](/entities/person-ami-kozak.md) (1 mention)

</div>
<div class="filter-item">

- [Andrew Cuomo](/entities/person-andrew-cuomo.md) (1 mention)

</div>
<div class="filter-item">

- [Andy Parish](/entities/person-andy-parish.md) (1 mention)

</div>
<div class="filter-item">

- [Angie Lynn](/entities/person-angie-lynn.md) (1 mention)

</div>
<div class="filter-item">

- [Anthony Iglesias](/entities/person-anthony-iglesias.md) (1 mention)

</div>
<div class="filter-item">

- [Anton Daniels](/entities/person-anton-daniels.md) (1 mention)

</div>
<div class="filter-item">

- [Barabbas](/entities/person-barabbas.md) (1 mention)

</div>
<div class="filter-item">

- [Benjamin Franklin](/entities/person-ben-franklin.md) (1 mention)

</div>
<div class="filter-item">

- [Bob Shorman](/entities/person-bob-shorman.md) (1 mention)

</div>
<div class="filter-item">

- [Brett Kavanaugh](/entities/person-brett-kavanaugh.md) (1 mention)

</div>
<div class="filter-item">

- [Briley](/entities/person-briley.md) (1 mention)

</div>
<div class="filter-item">

- [C.S. Lewis](/entities/person-cs-lewis.md) (1 mention)

</div>
<div class="filter-item">

- [Carl Wallnau](/entities/person-carl-wallnau.md) (1 mention)

</div>
<div class="filter-item">

- [Carrie Steele](/entities/person-carrie-steele.md) (1 mention)

</div>
<div class="filter-item">

- [Charles Joseph Bonaparte](/entities/person-charles-joseph-bonaparte.md) (1 mention)

</div>
<div class="filter-item">

- [Clayton Morris](/entities/person-clayton-morris.md) (1 mention)

</div>
<div class="filter-item">

- [Cleopatra](/entities/person-cleopatra.md) (1 mention)

</div>
<div class="filter-item">

- [Corey Lewandowski](/entities/person-corey-lewandowski.md) (1 mention)

</div>
<div class="filter-item">

- [Danny Davis](/entities/person-danny-davis.md) (1 mention)

</div>
<div class="filter-item">

- [David Schultz](/entities/person-david-schultz.md) (1 mention)

</div>
<div class="filter-item">

- [Dominick Dunne](/entities/person-dominick-dunne.md) (1 mention)

</div>
<div class="filter-item">

- [Donna Barata](/entities/person-donna-barata.md) (1 mention)

</div>
<div class="filter-item">

- [Doug D'Andrea](/entities/person-doug-dandrea.md) (1 mention)

</div>
<div class="filter-item">

- [Erica Mindel](/entities/person-erica-mindel.md) (1 mention)

</div>
<div class="filter-item">

- [Fegliano](/entities/person-fegliano.md) (1 mention)

</div>
<div class="filter-item">

- [Freddie Ponton](/entities/person-freddie-ponton.md) (1 mention)

</div>
<div class="filter-item">

- [George Washington](/entities/person-george-washington.md) (1 mention)

</div>
<div class="filter-item">

- [Gernot Omer](/entities/person-gernot-omer.md) (1 mention)

</div>
<div class="filter-item">

- [Henry Kissinger](/entities/person-henry-kissinger.md) (1 mention)

</div>
<div class="filter-item">

- [Hervé Hoppenot](/entities/person-herve-hoppenot.md) (1 mention)

</div>
<div class="filter-item">

- [Irénée du Pont](/entities/person-irenee-du-pont.md) (1 mention)

</div>
<div class="filter-item">

- [J. Warner Wallace](/entities/person-j-warner-wallace.md) (1 mention)

</div>
<div class="filter-item">

- [James Comey](/entities/person-james-comey.md) (1 mention)

</div>
<div class="filter-item">

- [Jamie Lynn Spears](/entities/person-jamie-lynn-spears.md) (1 mention)

</div>
<div class="filter-item">

- [Jamie Spears](/entities/person-jamie-spears.md) (1 mention)

</div>
<div class="filter-item">

- [Jan Jordan](/entities/person-jan-jordan.md) (1 mention)

</div>
<div class="filter-item">

- [Jason James Taylor](/entities/person-jason-james-taylor.md) (1 mention)

</div>
<div class="filter-item">

- [Jean-Christophe Mitterrand](/entities/person-jean-christophe-mitterrand.md) (1 mention)

</div>
<div class="filter-item">

- [Jeffrey Keon Ziss](/entities/person-jeffrey-keon-ziss.md) (1 mention)

</div>
<div class="filter-item">

- [Joe Gebbia](/entities/person-joe-gebbia.md) (1 mention)

</div>
<div class="filter-item">

- [John Matlin](/entities/person-john-matlin.md) (1 mention)

</div>
<div class="filter-item">

- [Jussie Smollett](/entities/person-jussie-smollett.md) (1 mention)

</div>
<div class="filter-item">

- [Justin Timberlake](/entities/person-justin-timberlake.md) (1 mention)

</div>
<div class="filter-item">

- [Katie Miller](/entities/person-katie-miller.md) (1 mention)

</div>
<div class="filter-item">

- [Ken Burns](/entities/person-ken-burns.md) (1 mention)

</div>
<div class="filter-item">

- [Kurt Kolvet](/entities/person-kurt-kolvet.md) (1 mention)

</div>
<div class="filter-item">

- [Kyle Kashuv](/entities/person-kyle-kashuv.md) (1 mention)

</div>
<div class="filter-item">

- [Leif Ericsson](/entities/person-leif-ericsson.md) (1 mention)

</div>
<div class="filter-item">

- [Lisa Dean](/entities/person-lisa-dean.md) (1 mention)

</div>
<div class="filter-item">

- [Liz Lyon](/entities/person-liz-lyon.md) (1 mention)

</div>
<div class="filter-item">

- [Loren Cunningham](/entities/person-loren-cunningham.md) (1 mention)

</div>
<div class="filter-item">

- [Macy Crofts](/entities/person-macy-crofts.md) (1 mention)

</div>
<div class="filter-item">

- [Mark Twain](/entities/person-mark-twain.md) (1 mention)

</div>
<div class="filter-item">

- [Michael Bloomberg](/entities/person-michael-bloomberg.md) (1 mention)

</div>
<div class="filter-item">

- [Michael Burt](/entities/person-michael-burt.md) (1 mention)

</div>
<div class="filter-item">

- [Mike Lee](/entities/person-mike-lee.md) (1 mention)

</div>
<div class="filter-item">

- [Milton Friedman](/entities/person-milton-friedman.md) (1 mention)

</div>
<div class="filter-item">

- [Miriam Deeds](/entities/person-miriam-deeds.md) (1 mention)

</div>
<div class="filter-item">

- [MrBeast](/entities/person-mrbeast.md) (1 mention)

</div>
<div class="filter-item">

- [Pavel Durov](/entities/person-pavel-durov.md) (1 mention)

</div>
<div class="filter-item">

- [Phil Turney](/entities/person-phil-turney.md) (1 mention)

</div>
<div class="filter-item">

- [Reverend Robert Davis](/entities/person-robert-davis.md) (1 mention)

</div>
<div class="filter-item">

- [Richard M. Aronson](/entities/person-richard-m-aronson.md) (1 mention)

</div>
<div class="filter-item">

- [Richard Ramirez](/entities/person-richard-ramirez.md) (1 mention)

</div>
<div class="filter-item">

- [Robert H. Richards](/entities/person-robert-h-richards.md) (1 mention)

</div>
<div class="filter-item">

- [Robert Kolvet](/entities/person-robert-kolvet.md) (1 mention)

</div>
<div class="filter-item">

- [Robert Richards the Fourth](/entities/person-robert-richards-the-fourth.md) (1 mention)

</div>
<div class="filter-item">

- [Roy Edgar McCoy](/entities/person-roy-edgar-mccoy.md) (1 mention)

</div>
<div class="filter-item">

- [Russell Brand](/entities/person-russell-brand.md) (1 mention)

</div>
<div class="filter-item">

- [Ryan Reynolds](/entities/person-ryan-reynolds.md) (1 mention)

</div>
<div class="filter-item">

- [Samuel Steele](/entities/person-samuel-steele.md) (1 mention)

</div>
<div class="filter-item">

- [Scott Robbins](/entities/person-scott-robbins.md) (1 mention)

</div>
<div class="filter-item">

- [Sean Foyt](/entities/person-sean-foyt.md) (1 mention)

</div>
<div class="filter-item">

- [Sean Penn](/entities/person-sean-penn.md) (1 mention)

</div>
<div class="filter-item">

- [Senator Mike Lee](/entities/person-senator-mike-lee.md) (1 mention)

</div>
<div class="filter-item">

- [Sergio Gor](/entities/person-sergio-gor.md) (1 mention)

</div>
<div class="filter-item">

- [Spencer Cox](/entities/person-spencer-cox.md) (1 mention)

</div>
<div class="filter-item">

- [T. Coleman du Pont](/entities/person-t-coleman-du-pont.md) (1 mention)

</div>
<div class="filter-item">

- [Tayler Hansen](/entities/person-tayler-hansen.md) (1 mention)

</div>
<div class="filter-item">

- [Theodore Herzl](/entities/person-theodore-herzl.md) (1 mention)

</div>
<div class="filter-item">

- [Thomas Jefferson](/entities/person-thomas-jefferson.md) (1 mention)

</div>
<div class="filter-item">

- [Viktor Yanukovych](/entities/person-viktor-yanukovych.md) (1 mention)

</div>
<div class="filter-item">

- [Harvey Weinstein](/entities/person-harvey-weinstein.md) (0 mentions)

</div>
<div class="filter-item">

- [William Shakespeare](/entities/person-shakespeare.md) (0 mentions)

</div>

</div>

<div class="tab-content tab-content-org">

_269 organizations sorted by most mentioned_

<div class="filter-item">

- [Turning Point USA](/entities/org-turning-point-usa.md) (705 mentions)

</div>
<div class="filter-item">

- [FBI](/entities/org-fbi.md) (381 mentions)

</div>
<div class="filter-item">

- [Riverbend Ranch](/entities/org-riverbend-ranch.md) (141 mentions)

</div>
<div class="filter-item">

- [American Financing](/entities/org-american-financing.md) (128 mentions)

</div>
<div class="filter-item">

- [Utah Valley University](/entities/org-utah-valley-university.md) (125 mentions)

</div>
<div class="filter-item">

- [Club Candace](/entities/org-club-candace.md) (79 mentions)

</div>
<div class="filter-item">

- [Preborn](/entities/org-preborn.md) (76 mentions)

</div>
<div class="filter-item">

- [Central Intelligence Agency](/entities/org-central-intelligence-agency.md) (59 mentions)

</div>
<div class="filter-item">

- [Calvary Chapel](/entities/org-calvary-chapel.md) (58 mentions)

</div>
<div class="filter-item">

- [Turning Point USA Faith](/entities/org-turning-point-usa-faith.md) (50 mentions)

</div>
<div class="filter-item">

- [Fox News](/entities/org-fox-news.md) (48 mentions)

</div>
<div class="filter-item">

- [The Daily Wire](/entities/org-the-daily-wire.md) (39 mentions)

</div>
<div class="filter-item">

- [White House](/entities/org-white-house.md) (39 mentions)

</div>
<div class="filter-item">

- [PureTalk](/entities/org-puretalk.md) (36 mentions)

</div>
<div class="filter-item">

- [Instagram](/entities/org-instagram.md) (35 mentions)

</div>
<div class="filter-item">

- [TikTok](/entities/org-tiktok.md) (35 mentions)

</div>
<div class="filter-item">

- [DuPont family](/entities/org-dupont-family.md) (34 mentions)

</div>
<div class="filter-item">

- [Neemi Skin Care](/entities/org-neemi-skin-care.md) (34 mentions)

</div>
<div class="filter-item">

- [YouTube](/entities/org-youtube.md) (34 mentions)

</div>
<div class="filter-item">

- [Anti-Defamation League](/entities/org-anti-defamation-league.md) (33 mentions)

</div>
<div class="filter-item">

- [United States Air Force](/entities/org-united-states-air-force.md) (33 mentions)

</div>
<div class="filter-item">

- [Paleo Valley](/entities/org-paleo-valley.md) (32 mentions)

</div>
<div class="filter-item">

- [TMZ](/entities/org-tmz.md) (31 mentions)

</div>
<div class="filter-item">

- [The Wellness Company](/entities/org-the-wellness-company.md) (28 mentions)

</div>
<div class="filter-item">

- [French Foreign Legion](/entities/org-french-foreign-legion.md) (27 mentions)

</div>
<div class="filter-item">

- [Nimi Skincare](/entities/org-nimi-skincare.md) (27 mentions)

</div>
<div class="filter-item">

- [Twitter](/entities/org-twitter.md) (27 mentions)

</div>
<div class="filter-item">

- [Mossad](/entities/org-mossad.md) (25 mentions)

</div>
<div class="filter-item">

- [NAR](/entities/org-nar.md) (24 mentions)

</div>
<div class="filter-item">

- [United States Pentagon](/entities/org-united-states-pentagon.md) (24 mentions)

</div>
<div class="filter-item">

- [Amazon](/entities/org-amazon.md) (23 mentions)

</div>
<div class="filter-item">

- [CNN](/entities/org-cnn.md) (23 mentions)

</div>
<div class="filter-item">

- [IRS](/entities/org-irs.md) (23 mentions)

</div>
<div class="filter-item">

- [Caldera Engineering](/entities/org-caldera-engineering.md) (22 mentions)

</div>
<div class="filter-item">

- [Discord](/entities/org-discord.md) (22 mentions)

</div>
<div class="filter-item">

- [PragerU](/entities/org-prageru.md) (21 mentions)

</div>
<div class="filter-item">

- [Department of Justice](/entities/org-department-of-justice.md) (19 mentions)

</div>
<div class="filter-item">

- [Just Thrive](/entities/org-just-thrive.md) (19 mentions)

</div>
<div class="filter-item">

- [Tax Network USA](/entities/org-tax-network-usa.md) (19 mentions)

</div>
<div class="filter-item">

- [AIPAC](/entities/org-aipac.md) (18 mentions)

</div>
<div class="filter-item">

- [PDS Debt](/entities/org-pds-debt.md) (18 mentions)

</div>
<div class="filter-item">

- [SaunaSpace](/entities/org-saunaspace.md) (18 mentions)

</div>
<div class="filter-item">

- [Google](/entities/org-google.md) (17 mentions)

</div>
<div class="filter-item">

- [IDF](/entities/org-idf.md) (17 mentions)

</div>
<div class="filter-item">

- [Satis](/entities/org-satis.md) (17 mentions)

</div>
<div class="filter-item">

- [the federal government](/entities/org-the-federal-government.md) (17 mentions)

</div>
<div class="filter-item">

- [Hamas](/entities/org-hamas.md) (16 mentions)

</div>
<div class="filter-item">

- [Dairy Queen](/entities/org-dairy-queen.md) (15 mentions)

</div>
<div class="filter-item">

- [Federal Reserve](/entities/org-federal-reserve.md) (15 mentions)

</div>
<div class="filter-item">

- [Ministry of the Armed Forces](/entities/org-ministry-of-the-armed-forces.md) (15 mentions)

</div>
<div class="filter-item">

- [Perplexity](/entities/org-perplexity.md) (14 mentions)

</div>
<div class="filter-item">

- [Vice](/entities/org-vice.md) (14 mentions)

</div>
<div class="filter-item">

- [Wikipedia](/entities/org-wikipedia.md) (14 mentions)

</div>
<div class="filter-item">

- [Black Lives Matter](/entities/org-black-lives-matter.md) (13 mentions)

</div>
<div class="filter-item">

- [Camp Ripley Training Center](/entities/org-camp-ripley-training-center.md) (13 mentions)

</div>
<div class="filter-item">

- [Pure Talk](/entities/org-pure-talk.md) (13 mentions)

</div>
<div class="filter-item">

- [Blexit](/entities/org-blexit.md) (12 mentions)

</div>
<div class="filter-item">

- [Daily Mail](/entities/org-daily-mail.md) (11 mentions)

</div>
<div class="filter-item">

- [Mar-a-Lago](/entities/org-mar-a-lago.md) (11 mentions)

</div>
<div class="filter-item">

- [Neemee Skincare](/entities/org-neemee-skincare.md) (11 mentions)

</div>
<div class="filter-item">

- [The Decentralized Intelligence Agency](/entities/org-decentralized-intelligence-agency.md) (11 mentions)

</div>
<div class="filter-item">

- [United States Army](/entities/org-united-states-army.md) (11 mentions)

</div>
<div class="filter-item">

- [Duncan Aviation](/entities/org-duncan-aviation.md) (10 mentions)

</div>
<div class="filter-item">

- [FlightRadar](/entities/org-flightradar.md) (10 mentions)

</div>
<div class="filter-item">

- [Lozier Center](/entities/org-lozier-center.md) (10 mentions)

</div>
<div class="filter-item">

- [New York Post](/entities/org-new-york-post.md) (10 mentions)

</div>
<div class="filter-item">

- [U.S. Navy](/entities/org-us-navy.md) (10 mentions)

</div>
<div class="filter-item">

- [United States Navy](/entities/org-united-states-navy.md) (10 mentions)

</div>
<div class="filter-item">

- [Antifa](/entities/org-antifa.md) (9 mentions)

</div>
<div class="filter-item">

- [Border Patrol](/entities/org-border-patrol.md) (9 mentions)

</div>
<div class="filter-item">

- [French intelligence](/entities/org-french-intelligence.md) (9 mentions)

</div>
<div class="filter-item">

- [Timpanogos Regional Hospital](/entities/org-timpanogos-regional-hospital.md) (9 mentions)

</div>
<div class="filter-item">

- [Baker Tilly](/entities/org-baker-tilly.md) (8 mentions)

</div>
<div class="filter-item">

- [BearingPoint](/entities/org-bearingpoint.md) (8 mentions)

</div>
<div class="filter-item">

- [Beekeeper's Naturals](/entities/org-beekeepers-naturals.md) (8 mentions)

</div>
<div class="filter-item">

- [CDC](/entities/org-cdc.md) (8 mentions)

</div>
<div class="filter-item">

- [Church of Jesus Christ of Latter-day Saints](/entities/org-church-of-jesus-christ-of-latter-day-saints.md) (8 mentions)

</div>
<div class="filter-item">

- [DEA](/entities/org-dea.md) (8 mentions)

</div>
<div class="filter-item">

- [Department of Defense](/entities/org-department-of-defense.md) (8 mentions)

</div>
<div class="filter-item">

- [Stanford](/entities/org-stanford.md) (8 mentions)

</div>
<div class="filter-item">

- [The New York Times](/entities/org-the-new-york-times.md) (8 mentions)

</div>
<div class="filter-item">

- [Freemasons](/entities/org-freemasons.md) (7 mentions)

</div>
<div class="filter-item">

- [Sorensen Center](/entities/org-sorensen-center.md) (7 mentions)

</div>
<div class="filter-item">

- [United States Congress](/entities/org-united-states-congress.md) (7 mentions)

</div>
<div class="filter-item">

- [Utah Valley Hospital](/entities/org-utah-valley-hospital.md) (7 mentions)

</div>
<div class="filter-item">

- [CBS](/entities/org-cbs.md) (6 mentions)

</div>
<div class="filter-item">

- [Fortune](/entities/org-fortune.md) (6 mentions)

</div>
<div class="filter-item">

- [Gno.land](/entities/org-gno-land.md) (6 mentions)

</div>
<div class="filter-item">

- [Insight](/entities/org-insight.md) (6 mentions)

</div>
<div class="filter-item">

- [NIMESKINCARE.COM](/entities/org-nimeskincare-com.md) (6 mentions)

</div>
<div class="filter-item">

- [RNC](/entities/org-rnc.md) (6 mentions)

</div>
<div class="filter-item">

- [Rodney Square](/entities/org-rodney-square.md) (6 mentions)

</div>
<div class="filter-item">

- [The Free Press](/entities/org-the-free-press.md) (6 mentions)

</div>
<div class="filter-item">

- [UVU students](/entities/org-uvu-students.md) (6 mentions)

</div>
<div class="filter-item">

- [Wall Street Journal](/entities/org-wall-street-journal.md) (6 mentions)

</div>
<div class="filter-item">

- [7 Weeks Coffee](/entities/org-7-weeks-coffee.md) (5 mentions)

</div>
<div class="filter-item">

- [Apple](/entities/org-apple.md) (5 mentions)

</div>
<div class="filter-item">

- [BBC](/entities/org-bbc.md) (5 mentions)

</div>
<div class="filter-item">

- [Better Business Bureau](/entities/org-better-business-bureau.md) (5 mentions)

</div>
<div class="filter-item">

- [David Horowitz Freedom Center](/entities/org-david-horowitz-freedom-center.md) (5 mentions)

</div>
<div class="filter-item">

- [Egyptian government](/entities/org-egyptian-government.md) (5 mentions)

</div>
<div class="filter-item">

- [Flock](/entities/org-flock.md) (5 mentions)

</div>
<div class="filter-item">

- [GNOLand](/entities/org-gnoland.md) (5 mentions)

</div>
<div class="filter-item">

- [Jezebel](/entities/org-jezebel.md) (5 mentions)

</div>
<div class="filter-item">

- [Joint Task Force Six](/entities/org-joint-task-force-six.md) (5 mentions)

</div>
<div class="filter-item">

- [Minot Air Force Base](/entities/org-minot-air-force-base.md) (5 mentions)

</div>
<div class="filter-item">

- [NewsNation](/entities/org-newsnation.md) (5 mentions)

</div>
<div class="filter-item">

- [Orem Police Department](/entities/org-orem-police-department.md) (5 mentions)

</div>
<div class="filter-item">

- [Trustpilot](/entities/org-trustpilot.md) (5 mentions)

</div>
<div class="filter-item">

- [Truth Social](/entities/org-truth-social.md) (5 mentions)

</div>
<div class="filter-item">

- [Turning Point Action](/entities/org-turning-point-action.md) (5 mentions)

</div>
<div class="filter-item">

- [U.S. Marines](/entities/org-us-marines.md) (5 mentions)

</div>
<div class="filter-item">

- [United States military](/entities/org-united-states-military.md) (5 mentions)

</div>
<div class="filter-item">

- [Utah State University](/entities/org-utah-state-university.md) (5 mentions)

</div>
<div class="filter-item">

- [Yale University](/entities/org-yale-university.md) (5 mentions)

</div>
<div class="filter-item">

- [Young Women's Leadership Summit](/entities/org-ywls.md) (5 mentions)

</div>
<div class="filter-item">

- [10th Mountain Division](/entities/org-10th-mountain-division.md) (4 mentions)

</div>
<div class="filter-item">

- [B'nai B'rith](/entities/org-b-nai-b-rith.md) (4 mentions)

</div>
<div class="filter-item">

- [Babylon Bee](/entities/org-babylon-bee.md) (4 mentions)

</div>
<div class="filter-item">

- [Branko International](/entities/org-branko-international.md) (4 mentions)

</div>
<div class="filter-item">

- [Candlewood Suites](/entities/org-candlewood-suites.md) (4 mentions)

</div>
<div class="filter-item">

- [Cracker Barrel](/entities/org-cracker-barrel.md) (4 mentions)

</div>
<div class="filter-item">

- [Ericsson](/entities/org-ericsson.md) (4 mentions)

</div>
<div class="filter-item">

- [Etsy](/entities/org-etsy.md) (4 mentions)

</div>
<div class="filter-item">

- [Immigration and Customs Enforcement](/entities/org-immigration-and-customs-enforcement.md) (4 mentions)

</div>
<div class="filter-item">

- [Incyte](/entities/org-incyte.md) (4 mentions)

</div>
<div class="filter-item">

- [LDS church](/entities/org-lds-church.md) (4 mentions)

</div>
<div class="filter-item">

- [Liberty University](/entities/org-liberty-university.md) (4 mentions)

</div>
<div class="filter-item">

- [Project Constitution](/entities/org-project-constitution.md) (4 mentions)

</div>
<div class="filter-item">

- [Root Brands](/entities/org-root-brands.md) (4 mentions)

</div>
<div class="filter-item">

- [Simon Wiesenthal Center](/entities/org-simon-wiesenthal-center.md) (4 mentions)

</div>
<div class="filter-item">

- [Spotify](/entities/org-spotify.md) (4 mentions)

</div>
<div class="filter-item">

- [Staples Center](/entities/org-staples-center.md) (4 mentions)

</div>
<div class="filter-item">

- [Telegram](/entities/org-telegram.md) (4 mentions)

</div>
<div class="filter-item">

- [Turning Point Endowment](/entities/org-turning-point-endowment.md) (4 mentions)

</div>
<div class="filter-item">

- [United States Secret Service](/entities/org-united-states-secret-service.md) (4 mentions)

</div>
<div class="filter-item">

- [Wilmington Trust](/entities/org-wilmington-trust.md) (4 mentions)

</div>
<div class="filter-item">

- [891st Missile Security Forces Squadron](/entities/org-891st-missile-security-forces-squadron.md) (3 mentions)

</div>
<div class="filter-item">

- [ACE Partners](/entities/org-ace-partners.md) (3 mentions)

</div>
<div class="filter-item">

- [Andreessen Horowitz](/entities/org-andreessen-horowitz.md) (3 mentions)

</div>
<div class="filter-item">

- [Azov Battalion](/entities/org-azov-battalion.md) (3 mentions)

</div>
<div class="filter-item">

- [Bank of America](/entities/org-bank-of-america.md) (3 mentions)

</div>
<div class="filter-item">

- [Berkeley](/entities/org-berkeley.md) (3 mentions)

</div>
<div class="filter-item">

- [BYU](/entities/org-byu.md) (3 mentions)

</div>
<div class="filter-item">

- [Canines for Warriors](/entities/org-canines-for-warriors.md) (3 mentions)

</div>
<div class="filter-item">

- [CBS News](/entities/org-cbs-news.md) (3 mentions)

</div>
<div class="filter-item">

- [Egyptian Air Force](/entities/org-egyptian-air-force.md) (3 mentions)

</div>
<div class="filter-item">

- [Federal Communications Commission](/entities/org-fcc.md) (3 mentions)

</div>
<div class="filter-item">

- [French military](/entities/org-french-military.md) (3 mentions)

</div>
<div class="filter-item">

- [Jerusalem Post](/entities/org-jerusalem-post.md) (3 mentions)

</div>
<div class="filter-item">

- [Joint Task Force Southern Border](/entities/org-joint-task-force-southern-border.md) (3 mentions)

</div>
<div class="filter-item">

- [Little Oaks](/entities/org-little-oaks.md) (3 mentions)

</div>
<div class="filter-item">

- [MG+M](/entities/org-mg-m.md) (3 mentions)

</div>
<div class="filter-item">

- [Newsweek](/entities/org-newsweek.md) (3 mentions)

</div>
<div class="filter-item">

- [Project Veritas](/entities/org-project-veritas.md) (3 mentions)

</div>
<div class="filter-item">

- [Raytheon](/entities/org-raytheon.md) (3 mentions)

</div>
<div class="filter-item">

- [ROTC](/entities/org-rotc.md) (3 mentions)

</div>
<div class="filter-item">

- [Sallie Mae](/entities/org-sallie-mae.md) (3 mentions)

</div>
<div class="filter-item">

- [Silver Lake](/entities/org-silver-lake.md) (3 mentions)

</div>
<div class="filter-item">

- [Sinaloa Cartel](/entities/org-sinaloa-cartel.md) (3 mentions)

</div>
<div class="filter-item">

- [Snopes](/entities/org-snopes.md) (3 mentions)

</div>
<div class="filter-item">

- [Stanford University](/entities/org-stanford-university.md) (3 mentions)

</div>
<div class="filter-item">

- [UCLA](/entities/org-ucla.md) (3 mentions)

</div>
<div class="filter-item">

- [University of Nebraska, Lincoln](/entities/org-university-of-nebraska-lincoln.md) (3 mentions)

</div>
<div class="filter-item">

- [University of Utah](/entities/org-university-of-utah.md) (3 mentions)

</div>
<div class="filter-item">

- [USDA](/entities/org-usda.md) (3 mentions)

</div>
<div class="filter-item">

- [Vanity Fair](/entities/org-vanity-fair.md) (3 mentions)

</div>
<div class="filter-item">

- [Washington County Sheriff's Office](/entities/org-washington-county-sheriff-s-office.md) (3 mentions)

</div>
<div class="filter-item">

- [Wendy's](/entities/org-wendys.md) (3 mentions)

</div>
<div class="filter-item">

- [Wolves and Finance](/entities/org-wolves-and-finance.md) (3 mentions)

</div>
<div class="filter-item">

- [YieldiFi](/entities/org-yieldifi.md) (3 mentions)

</div>
<div class="filter-item">

- [2nd Foreign Infantry Regiment](/entities/org-2nd-foreign-infantry-regiment.md) (2 mentions)

</div>
<div class="filter-item">

- [ABC](/entities/org-abc.md) (2 mentions)

</div>
<div class="filter-item">

- [ADS-B Exchange](/entities/org-ads-b-exchange.md) (2 mentions)

</div>
<div class="filter-item">

- [Air Force Two](/entities/org-air-force-two.md) (2 mentions)

</div>
<div class="filter-item">

- [American Jewish Committee](/entities/org-american-jewish-committee.md) (2 mentions)

</div>
<div class="filter-item">

- [Breitbart News](/entities/org-breitbart-news.md) (2 mentions)

</div>
<div class="filter-item">

- [Calvary Chapel Association](/entities/org-calvary-chapel-association.md) (2 mentions)

</div>
<div class="filter-item">

- [CorpWatch](/entities/org-corpwatch.md) (2 mentions)

</div>
<div class="filter-item">

- [Disney](/entities/org-disney.md) (2 mentions)

</div>
<div class="filter-item">

- [Federal Aviation Administration](/entities/org-faa.md) (2 mentions)

</div>
<div class="filter-item">

- [Goldman Sachs](/entities/org-goldman-sachs.md) (2 mentions)

</div>
<div class="filter-item">

- [Harvard University](/entities/org-harvard-university.md) (2 mentions)

</div>
<div class="filter-item">

- [HBO](/entities/org-hbo.md) (2 mentions)

</div>
<div class="filter-item">

- [Holocaust Museum](/entities/org-holocaust-museum.md) (2 mentions)

</div>
<div class="filter-item">

- [Ignite](/entities/org-ignite.md) (2 mentions)

</div>
<div class="filter-item">

- [In-N-Out](/entities/org-in-n-out.md) (2 mentions)

</div>
<div class="filter-item">

- [LA Times](/entities/org-la-times.md) (2 mentions)

</div>
<div class="filter-item">

- [National Gendarmerie Intervention Group](/entities/org-national-gendarmerie-intervention-group.md) (2 mentions)

</div>
<div class="filter-item">

- [National Security Agency](/entities/org-national-security-agency.md) (2 mentions)

</div>
<div class="filter-item">

- [Nemours Children's Hospitals](/entities/org-nemours-children-s-hospitals.md) (2 mentions)

</div>
<div class="filter-item">

- [One Shot TV](/entities/org-one-shot-tv.md) (2 mentions)

</div>
<div class="filter-item">

- [Operation Underground Railroad](/entities/org-operation-underground-railroad.md) (2 mentions)

</div>
<div class="filter-item">

- [Paramount](/entities/org-paramount.md) (2 mentions)

</div>
<div class="filter-item">

- [PBS](/entities/org-pbs.md) (2 mentions)

</div>
<div class="filter-item">

- [Potter's Fields Ministries](/entities/org-potters-fields-ministries.md) (2 mentions)

</div>
<div class="filter-item">

- [Republican Jewish Coalition](/entities/org-republican-jewish-coalition.md) (2 mentions)

</div>
<div class="filter-item">

- [Safari Club](/entities/org-safari-club.md) (2 mentions)

</div>
<div class="filter-item">

- [Southern New Hampshire University](/entities/org-southern-new-hampshire-university.md) (2 mentions)

</div>
<div class="filter-item">

- [Students for Life](/entities/org-students-for-life.md) (2 mentions)

</div>
<div class="filter-item">

- [T.W. Lewis Foundation](/entities/org-tw-lewis-foundation.md) (2 mentions)

</div>
<div class="filter-item">

- [Tel Aviv University](/entities/org-tel-aviv-university.md) (2 mentions)

</div>
<div class="filter-item">

- [United States Senate](/entities/org-us-senate.md) (2 mentions)

</div>
<div class="filter-item">

- [University of Mississippi](/entities/org-university-of-mississippi.md) (2 mentions)

</div>
<div class="filter-item">

- [Utah County Sheriff's Office](/entities/org-utah-county-sheriff-s-office.md) (2 mentions)

</div>
<div class="filter-item">

- [Warren Commission](/entities/org-warren-commission.md) (2 mentions)

</div>
<div class="filter-item">

- [Wilmington Savings Fund Society](/entities/org-wilmington-savings-fund-society.md) (2 mentions)

</div>
<div class="filter-item">

- [Young Americans for Liberty](/entities/org-young-americans-for-liberty.md) (2 mentions)

</div>
<div class="filter-item">

- [Ziklag](/entities/org-ziklag.md) (2 mentions)

</div>
<div class="filter-item">

- [4th Company, 2nd Foreign Infantry Regiment](/entities/org-4th-company-2nd-foreign-infantry-regiment.md) (1 mention)

</div>
<div class="filter-item">

- [6th Light Armored Brigade](/entities/org-6th-light-armored-brigade.md) (1 mention)

</div>
<div class="filter-item">

- [6th Marine Regiment](/entities/org-6th-marine-regiment.md) (1 mention)

</div>
<div class="filter-item">

- [Airbnb](/entities/org-airbnb.md) (1 mention)

</div>
<div class="filter-item">

- [Auburn University](/entities/org-auburn-university.md) (1 mention)

</div>
<div class="filter-item">

- [Bracebridge Complex](/entities/org-bracebridge-complex.md) (1 mention)

</div>
<div class="filter-item">

- [Bridge Complex](/entities/org-bridge-complex.md) (1 mention)

</div>
<div class="filter-item">

- [Bryce Eddie Show](/entities/org-bryce-eddie-show.md) (1 mention)

</div>
<div class="filter-item">

- [BuzzFeed](/entities/org-buzzfeed.md) (1 mention)

</div>
<div class="filter-item">

- [Cab Calloway School](/entities/org-cab-calloway-school.md) (1 mention)

</div>
<div class="filter-item">

- [Calvary Chapel Cary](/entities/org-calvary-chapel-cary.md) (1 mention)

</div>
<div class="filter-item">

- [Calvary Chapel Chino Hills](/entities/org-calvary-chapel-chino-hills.md) (1 mention)

</div>
<div class="filter-item">

- [Calvary Chapel of the Woodlands](/entities/org-calvary-chapel-woodlands.md) (1 mention)

</div>
<div class="filter-item">

- [Calvary Chapel Pompano Beach](/entities/org-calvary-chapel-pompano-beach.md) (1 mention)

</div>
<div class="filter-item">

- [Calvary Chapel Post Falls](/entities/org-calvary-chapel-post-falls.md) (1 mention)

</div>
<div class="filter-item">

- [Calvary Chapel Solid Rock](/entities/org-calvary-chapel-solid-rock.md) (1 mention)

</div>
<div class="filter-item">

- [CBN News](/entities/org-cbn-news.md) (1 mention)

</div>
<div class="filter-item">

- [Cloverstone Ventures](/entities/org-cloverstone-ventures.md) (1 mention)

</div>
<div class="filter-item">

- [DailyWire](/entities/org-dailywire.md) (1 mention)

</div>
<div class="filter-item">

- [Democratic Socialists of America](/entities/org-democratic-socialists-of-america.md) (1 mention)

</div>
<div class="filter-item">

- [Enron](/entities/org-enron.md) (1 mention)

</div>
<div class="filter-item">

- [Financial Times](/entities/org-financial-times.md) (1 mention)

</div>
<div class="filter-item">

- [First and Central Presbyterian Church](/entities/org-first-and-central-presbyterian-church.md) (1 mention)

</div>
<div class="filter-item">

- [France 24](/entities/org-france-24.md) (1 mention)

</div>
<div class="filter-item">

- [French Foreign Legionnaires](/entities/org-french-foreign-legionnaires.md) (1 mention)

</div>
<div class="filter-item">

- [Global Witness](/entities/org-global-witness.md) (1 mention)

</div>
<div class="filter-item">

- [Godspeak Calvary Chapel](/entities/org-godspeak-calvary-chapel.md) (1 mention)

</div>
<div class="filter-item">

- [Hotel du Pont](/entities/org-hotel-du-pont.md) (1 mention)

</div>
<div class="filter-item">

- [JPMorgan Chase](/entities/org-jpmorgan-chase.md) (1 mention)

</div>
<div class="filter-item">

- [JTV](/entities/org-jtv.md) (1 mention)

</div>
<div class="filter-item">

- [Keesler Air Force Medical Center](/entities/org-keesler-afb-medical-center.md) (1 mention)

</div>
<div class="filter-item">

- [LASI Aviation LLC](/entities/org-lasi-aviation.md) (1 mention)

</div>
<div class="filter-item">

- [Leadership Institute](/entities/org-leadership-institute.md) (1 mention)

</div>
<div class="filter-item">

- [Longwood Foundation](/entities/org-longwood-foundation.md) (1 mention)

</div>
<div class="filter-item">

- [National Guard](/entities/org-national-guard.md) (1 mention)

</div>
<div class="filter-item">

- [National Guard regiments](/entities/org-national-guard-regiments.md) (1 mention)

</div>
<div class="filter-item">

- [News Journal](/entities/org-news-journal.md) (1 mention)

</div>
<div class="filter-item">

- [One America News](/entities/org-one-america-news.md) (1 mention)

</div>
<div class="filter-item">

- [Oracle](/entities/org-oracle.md) (1 mention)

</div>
<div class="filter-item">

- [Prager University](/entities/org-prager-university.md) (1 mention)

</div>
<div class="filter-item">

- [Richards, Layton & Finger](/entities/org-richards-layton-finger.md) (1 mention)

</div>
<div class="filter-item">

- [Rothschild family](/entities/org-rothschild-family.md) (1 mention)

</div>
<div class="filter-item">

- [Salt Lake County Sheriff's Office](/entities/org-salt-lake-county-sheriff-s-office.md) (1 mention)

</div>
<div class="filter-item">

- [TP Action](/entities/org-tp-action.md) (1 mention)

</div>
<div class="filter-item">

- [Transition Delaware LLC](/entities/org-transition-delaware-llc.md) (1 mention)

</div>
<div class="filter-item">

- [Tristar](/entities/org-tristar.md) (1 mention)

</div>
<div class="filter-item">

- [United Nations](/entities/org-united-nations.md) (1 mention)

</div>
<div class="filter-item">

- [United States Capitol Police](/entities/org-united-states-capitol-police.md) (1 mention)

</div>
<div class="filter-item">

- [VA](/entities/org-va.md) (1 mention)

</div>
<div class="filter-item">

- [Wilmington University](/entities/org-wilmington-university.md) (1 mention)

</div>
<div class="filter-item">

- [Youth With A Mission](/entities/org-youth-with-a-mission.md) (1 mention)

</div>
<div class="filter-item">

- [America's Warrior Partnership](/entities/org-americas-warrior-partnership.md) (0 mentions)

</div>
<div class="filter-item">

- [Army Criminal Investigation Division](/entities/org-army-criminal-investigation-division.md) (0 mentions)

</div>
<div class="filter-item">

- [Calvary Chapel Brentwood](/entities/org-calvary-chapel-brentwood.md) (0 mentions)

</div>
<div class="filter-item">

- [Calvary Chapel Fort Lauderdale](/entities/org-calvary-chapel-fort-lauderdale.md) (0 mentions)

</div>
<div class="filter-item">

- [Calvary Chapel Mission Viejo](/entities/org-calvary-chapel-mission-viejo.md) (0 mentions)

</div>
<div class="filter-item">

- [Calvary Chapel North Thurston](/entities/org-calvary-chapel-north-thurston.md) (0 mentions)

</div>
<div class="filter-item">

- [Purdue Pharma](/entities/org-purdue-pharma.md) (0 mentions)

</div>
<div class="filter-item">

- [PurgeStore](/entities/org-purge-store.md) (0 mentions)

</div>
<div class="filter-item">

- [Sackler Family](/entities/org-sackler-family.md) (0 mentions)

</div>

</div>

<div class="tab-content tab-content-gpe">

_152 places sorted by most mentioned_

<div class="filter-item">

- [United States](/entities/gpe-united-states.md) (684 mentions)

</div>
<div class="filter-item">

- [Israel](/entities/gpe-israel.md) (620 mentions)

</div>
<div class="filter-item">

- [France](/entities/gpe-france.md) (195 mentions)

</div>
<div class="filter-item">

- [Egypt](/entities/gpe-egypt.md) (157 mentions)

</div>
<div class="filter-item">

- [Utah](/entities/gpe-utah.md) (157 mentions)

</div>
<div class="filter-item">

- [Wilmington](/entities/gpe-wilmington.md) (87 mentions)

</div>
<div class="filter-item">

- [Delaware](/entities/gpe-delaware.md) (83 mentions)

</div>
<div class="filter-item">

- [Provo](/entities/gpe-provo.md) (65 mentions)

</div>
<div class="filter-item">

- [Hamptons](/entities/gpe-hamptons.md) (56 mentions)

</div>
<div class="filter-item">

- [Gaza](/entities/gpe-gaza.md) (49 mentions)

</div>
<div class="filter-item">

- [New York](/entities/gpe-new-york.md) (48 mentions)

</div>
<div class="filter-item">

- [Arizona](/entities/gpe-arizona.md) (45 mentions)

</div>
<div class="filter-item">

- [Ukraine](/entities/gpe-ukraine.md) (40 mentions)

</div>
<div class="filter-item">

- [Russia](/entities/gpe-russia.md) (30 mentions)

</div>
<div class="filter-item">

- [California](/entities/gpe-california.md) (29 mentions)

</div>
<div class="filter-item">

- [Cairo](/entities/gpe-cairo.md) (27 mentions)

</div>
<div class="filter-item">

- [Nebraska](/entities/gpe-nebraska.md) (27 mentions)

</div>
<div class="filter-item">

- [Salt Lake City](/entities/gpe-salt-lake-city.md) (27 mentions)

</div>
<div class="filter-item">

- [United Kingdom](/entities/gpe-united-kingdom.md) (26 mentions)

</div>
<div class="filter-item">

- [Iran](/entities/gpe-iran.md) (25 mentions)

</div>
<div class="filter-item">

- [Scottsdale](/entities/gpe-scottsdale.md) (22 mentions)

</div>
<div class="filter-item">

- [Hollywood](/entities/gpe-hollywood.md) (21 mentions)

</div>
<div class="filter-item">

- [Lincoln](/entities/gpe-lincoln.md) (21 mentions)

</div>
<div class="filter-item">

- [Paris](/entities/gpe-paris.md) (20 mentions)

</div>
<div class="filter-item">

- [Wyoming](/entities/gpe-wyoming.md) (19 mentions)

</div>
<div class="filter-item">

- [920 North King Street](/entities/gpe-920-north-king-street.md) (18 mentions)

</div>
<div class="filter-item">

- [Australia](/entities/gpe-australia.md) (18 mentions)

</div>
<div class="filter-item">

- [Middle East](/entities/gpe-middle-east.md) (18 mentions)

</div>
<div class="filter-item">

- [Phoenix](/entities/gpe-phoenix.md) (17 mentions)

</div>
<div class="filter-item">

- [Orem](/entities/gpe-orem.md) (16 mentions)

</div>
<div class="filter-item">

- [Thousand Oaks](/entities/gpe-thousand-oaks.md) (16 mentions)

</div>
<div class="filter-item">

- [Minot](/entities/gpe-minot.md) (15 mentions)

</div>
<div class="filter-item">

- [Qatar](/entities/gpe-qatar.md) (15 mentions)

</div>
<div class="filter-item">

- [Jerusalem](/entities/gpe-jerusalem.md) (14 mentions)

</div>
<div class="filter-item">

- [Minnesota](/entities/gpe-minnesota.md) (12 mentions)

</div>
<div class="filter-item">

- [Texas](/entities/gpe-texas.md) (12 mentions)

</div>
<div class="filter-item">

- [Washington County](/entities/gpe-washington-county.md) (12 mentions)

</div>
<div class="filter-item">

- [Canada](/entities/gpe-canada.md) (11 mentions)

</div>
<div class="filter-item">

- [Las Vegas](/entities/gpe-las-vegas.md) (11 mentions)

</div>
<div class="filter-item">

- [Nashville](/entities/gpe-nashville.md) (11 mentions)

</div>
<div class="filter-item">

- [Fort Huachuca](/entities/gpe-fort-huachuca.md) (10 mentions)

</div>
<div class="filter-item">

- [Kansas](/entities/gpe-kansas.md) (10 mentions)

</div>
<div class="filter-item">

- [Angola](/entities/gpe-angola.md) (9 mentions)

</div>
<div class="filter-item">

- [North Dakota](/entities/gpe-north-dakota.md) (9 mentions)

</div>
<div class="filter-item">

- [Santa Barbara](/entities/gpe-santa-barbara.md) (9 mentions)

</div>
<div class="filter-item">

- [Tel Aviv](/entities/gpe-tel-aviv.md) (9 mentions)

</div>
<div class="filter-item">

- [Tennessee](/entities/gpe-tennessee.md) (9 mentions)

</div>
<div class="filter-item">

- [Camp Ripley](/entities/gpe-camp-ripley.md) (8 mentions)

</div>
<div class="filter-item">

- [Connecticut](/entities/gpe-connecticut.md) (8 mentions)

</div>
<div class="filter-item">

- [Florida](/entities/gpe-florida.md) (8 mentions)

</div>
<div class="filter-item">

- [Germany](/entities/gpe-germany.md) (8 mentions)

</div>
<div class="filter-item">

- [Japan](/entities/gpe-japan.md) (8 mentions)

</div>
<div class="filter-item">

- [London](/entities/gpe-london.md) (8 mentions)

</div>
<div class="filter-item">

- [Mexico](/entities/gpe-mexico.md) (8 mentions)

</div>
<div class="filter-item">

- [Montana](/entities/gpe-montana.md) (8 mentions)

</div>
<div class="filter-item">

- [New York City](/entities/gpe-new-york-city.md) (8 mentions)

</div>
<div class="filter-item">

- [Washington, D.C.](/entities/gpe-washington-d-c.md) (8 mentions)

</div>
<div class="filter-item">

- [Dallas](/entities/gpe-dallas.md) (7 mentions)

</div>
<div class="filter-item">

- [Hall of Flags](/entities/gpe-hall-of-flags.md) (7 mentions)

</div>
<div class="filter-item">

- [Missouri](/entities/gpe-missouri.md) (7 mentions)

</div>
<div class="filter-item">

- [Omaha](/entities/gpe-omaha.md) (7 mentions)

</div>
<div class="filter-item">

- [Palestine](/entities/gpe-palestine.md) (7 mentions)

</div>
<div class="filter-item">

- [South Korea](/entities/gpe-south-korea.md) (7 mentions)

</div>
<div class="filter-item">

- [1100 North King Street](/entities/gpe-1100-north-king-street.md) (6 mentions)

</div>
<div class="filter-item">

- [Africa](/entities/gpe-africa.md) (6 mentions)

</div>
<div class="filter-item">

- [Borderline Bar and Grill](/entities/gpe-borderline-bar-and-grill.md) (6 mentions)

</div>
<div class="filter-item">

- [Chicago](/entities/gpe-chicago.md) (6 mentions)

</div>
<div class="filter-item">

- [El Paso](/entities/gpe-el-paso.md) (6 mentions)

</div>
<div class="filter-item">

- [Europe](/entities/gpe-europe.md) (6 mentions)

</div>
<div class="filter-item">

- [Saudi Arabia](/entities/gpe-saudi-arabia.md) (6 mentions)

</div>
<div class="filter-item">

- [Virginia](/entities/gpe-virginia.md) (6 mentions)

</div>
<div class="filter-item">

- [500 Delaware Avenue](/entities/gpe-500-delaware-avenue.md) (5 mentions)

</div>
<div class="filter-item">

- [Iraq](/entities/gpe-iraq.md) (5 mentions)

</div>
<div class="filter-item">

- [New Hampshire](/entities/gpe-new-hampshire.md) (5 mentions)

</div>
<div class="filter-item">

- [St. Louis](/entities/gpe-st-louis.md) (5 mentions)

</div>
<div class="filter-item">

- [Syria](/entities/gpe-syria.md) (5 mentions)

</div>
<div class="filter-item">

- [Thousand Oaks, California](/entities/gpe-thousand-oaks-california.md) (5 mentions)

</div>
<div class="filter-item">

- [Tucson](/entities/gpe-tucson.md) (5 mentions)

</div>
<div class="filter-item">

- [Wichita](/entities/gpe-wichita.md) (5 mentions)

</div>
<div class="filter-item">

- [Élysée Palace](/entities/gpe-elysee-palace.md) (5 mentions)

</div>
<div class="filter-item">

- [Andrews Air Force Base](/entities/gpe-andrews-air-force-base.md) (4 mentions)

</div>
<div class="filter-item">

- [Austria](/entities/gpe-austria.md) (4 mentions)

</div>
<div class="filter-item">

- [Orange County](/entities/gpe-orange-county.md) (4 mentions)

</div>
<div class="filter-item">

- [Washington](/entities/gpe-washington-state.md) (4 mentions)

</div>
<div class="filter-item">

- [China](/entities/gpe-china.md) (3 mentions)

</div>
<div class="filter-item">

- [Colorado Springs](/entities/gpe-colorado-springs.md) (3 mentions)

</div>
<div class="filter-item">

- [Congo](/entities/gpe-congo.md) (3 mentions)

</div>
<div class="filter-item">

- [Croatia](/entities/gpe-croatia.md) (3 mentions)

</div>
<div class="filter-item">

- [Hamburg](/entities/gpe-hamburg.md) (3 mentions)

</div>
<div class="filter-item">

- [Idaho](/entities/gpe-idaho.md) (3 mentions)

</div>
<div class="filter-item">

- [India](/entities/gpe-india.md) (3 mentions)

</div>
<div class="filter-item">

- [Ireland](/entities/gpe-ireland.md) (3 mentions)

</div>
<div class="filter-item">

- [Malibu](/entities/gpe-malibu.md) (3 mentions)

</div>
<div class="filter-item">

- [Nemours](/entities/gpe-nemours.md) (3 mentions)

</div>
<div class="filter-item">

- [New Zealand](/entities/gpe-new-zealand.md) (3 mentions)

</div>
<div class="filter-item">

- [North Carolina](/entities/gpe-north-carolina.md) (3 mentions)

</div>
<div class="filter-item">

- [Serbia](/entities/gpe-serbia.md) (3 mentions)

</div>
<div class="filter-item">

- [South Carolina](/entities/gpe-south-carolina.md) (3 mentions)

</div>
<div class="filter-item">

- [St. George](/entities/gpe-st-george.md) (3 mentions)

</div>
<div class="filter-item">

- [Thailand](/entities/gpe-thailand.md) (3 mentions)

</div>
<div class="filter-item">

- [Topeka](/entities/gpe-topeka.md) (3 mentions)

</div>
<div class="filter-item">

- [Warner Valley](/entities/gpe-warner-valley.md) (3 mentions)

</div>
<div class="filter-item">

- [Wuhan](/entities/gpe-wuhan.md) (3 mentions)

</div>
<div class="filter-item">

- [1100 North Market Street](/entities/gpe-1100-north-market-street.md) (2 mentions)

</div>
<div class="filter-item">

- [33 Thomas Street](/entities/gpe-33-thomas-street.md) (2 mentions)

</div>
<div class="filter-item">

- [Afghanistan](/entities/gpe-afghanistan.md) (2 mentions)

</div>
<div class="filter-item">

- [Agua Prieta](/entities/gpe-agua-prieta.md) (2 mentions)

</div>
<div class="filter-item">

- [Atlanta](/entities/gpe-atlanta.md) (2 mentions)

</div>
<div class="filter-item">

- [Auschwitz](/entities/gpe-auschwitz.md) (2 mentions)

</div>
<div class="filter-item">

- [Blanding](/entities/gpe-blanding.md) (2 mentions)

</div>
<div class="filter-item">

- [Brentwood](/entities/gpe-brentwood.md) (2 mentions)

</div>
<div class="filter-item">

- [British Columbia](/entities/gpe-british-columbia.md) (2 mentions)

</div>
<div class="filter-item">

- [Cambodia](/entities/gpe-cambodia.md) (2 mentions)

</div>
<div class="filter-item">

- [Dana Point](/entities/gpe-dana-point.md) (2 mentions)

</div>
<div class="filter-item">

- [Douglas, Arizona](/entities/gpe-douglas-arizona.md) (2 mentions)

</div>
<div class="filter-item">

- [Maine](/entities/gpe-maine.md) (2 mentions)

</div>
<div class="filter-item">

- [Naco, Arizona](/entities/gpe-naco-arizona.md) (2 mentions)

</div>
<div class="filter-item">

- [North Shores](/entities/gpe-north-shores.md) (2 mentions)

</div>
<div class="filter-item">

- [Riyadh](/entities/gpe-riyadh.md) (2 mentions)

</div>
<div class="filter-item">

- [Scotland](/entities/gpe-scotland.md) (2 mentions)

</div>
<div class="filter-item">

- [Slovakia](/entities/gpe-slovakia.md) (2 mentions)

</div>
<div class="filter-item">

- [South America](/entities/gpe-south-america.md) (2 mentions)

</div>
<div class="filter-item">

- [Tampa](/entities/gpe-tampa.md) (2 mentions)

</div>
<div class="filter-item">

- [Turkey](/entities/gpe-turkey.md) (2 mentions)

</div>
<div class="filter-item">

- [Vietnam](/entities/gpe-vietnam.md) (2 mentions)

</div>
<div class="filter-item">

- [Westchester](/entities/gpe-westchester.md) (2 mentions)

</div>
<div class="filter-item">

- [919 North Market Street](/entities/gpe-919-north-market-street.md) (1 mention)

</div>
<div class="filter-item">

- [Alexandria, Virginia](/entities/gpe-alexandria-virginia.md) (1 mention)

</div>
<div class="filter-item">

- [Algeria](/entities/gpe-algeria.md) (1 mention)

</div>
<div class="filter-item">

- [Amiens](/entities/gpe-amiens.md) (1 mention)

</div>
<div class="filter-item">

- [Colorado](/entities/gpe-colorado.md) (1 mention)

</div>
<div class="filter-item">

- [Costa Rica](/entities/gpe-costa-rica.md) (1 mention)

</div>
<div class="filter-item">

- [Greenville](/entities/gpe-greenville.md) (1 mention)

</div>
<div class="filter-item">

- [Guatemala](/entities/gpe-guatemala.md) (1 mention)

</div>
<div class="filter-item">

- [Manhattan Beach](/entities/gpe-manhattan-beach.md) (1 mention)

</div>
<div class="filter-item">

- [Morocco](/entities/gpe-morocco.md) (1 mention)

</div>
<div class="filter-item">

- [Oregon](/entities/gpe-oregon.md) (1 mention)

</div>
<div class="filter-item">

- [Philadelphia](/entities/gpe-philadelphia.md) (1 mention)

</div>
<div class="filter-item">

- [Pompano Beach](/entities/gpe-pompano-beach.md) (1 mention)

</div>
<div class="filter-item">

- [Post Falls](/entities/gpe-post-falls.md) (1 mention)

</div>
<div class="filter-item">

- [Rehoboth Beach](/entities/gpe-rehoboth-beach.md) (1 mention)

</div>
<div class="filter-item">

- [Rhodesia](/entities/gpe-rhodesia.md) (1 mention)

</div>
<div class="filter-item">

- [San Juan Capistrano](/entities/gpe-san-juan-capistrano.md) (1 mention)

</div>
<div class="filter-item">

- [Santa Ana](/entities/gpe-santa-ana.md) (1 mention)

</div>
<div class="filter-item">

- [South Africa](/entities/gpe-south-africa.md) (1 mention)

</div>
<div class="filter-item">

- [Switzerland](/entities/gpe-switzerland.md) (1 mention)

</div>
<div class="filter-item">

- [Uganda](/entities/gpe-uganda.md) (1 mention)

</div>
<div class="filter-item">

- [Whitefish](/entities/gpe-whitefish.md) (1 mention)

</div>
<div class="filter-item">

- [Wisconsin](/entities/gpe-wisconsin.md) (1 mention)

</div>
<div class="filter-item">

- [Namibia](/entities/gpe-namibia.md) (0 mentions)

</div>
<div class="filter-item">

- [Sherman Oaks](/entities/gpe-sherman-oaks.md) (0 mentions)

</div>
<div class="filter-item">

- [Sierra Vista](/entities/gpe-sierra-vista.md) (0 mentions)

</div>

</div>

<div class="tab-content tab-content-event">

_19 events sorted by most mentioned_

<div class="filter-item">

- [Charlie Kirk assassination](/entities/event-charlie-kirk-assassination.md) (231 mentions)

</div>
<div class="filter-item">

- [COVID-19 Pandemic](/entities/event-covid-19-pandemic.md) (14 mentions)

</div>
<div class="filter-item">

- [January 6th](/entities/event-january-6th.md) (11 mentions)

</div>
<div class="filter-item">

- [9/11](/entities/event-9-11.md) (10 mentions)

</div>
<div class="filter-item">

- [America Fest](/entities/event-america-fest.md) (10 mentions)

</div>
<div class="filter-item">

- [JFK assassination](/entities/event-jfk-assassination.md) (9 mentions)

</div>
<div class="filter-item">

- [Operation Valhalla](/entities/event-operation-valhalla.md) (7 mentions)

</div>
<div class="filter-item">

- [Angolagate scandal](/entities/event-angola-gate.md) (4 mentions)

</div>
<div class="filter-item">

- [Iran-Contra Affair](/entities/event-iran-contra-affair.md) (4 mentions)

</div>
<div class="filter-item">

- [Kingdom to the Capitol Tour](/entities/event-kingdom-to-the-capitol-tour.md) (4 mentions)

</div>
<div class="filter-item">

- [USS Liberty incident](/entities/event-uss-liberty-incident.md) (4 mentions)

</div>
<div class="filter-item">

- [Moon landing](/entities/event-moon-landing.md) (3 mentions)

</div>
<div class="filter-item">

- [Operation Bright Star](/entities/event-operation-bright-star.md) (3 mentions)

</div>
<div class="filter-item">

- [Paris Design Week](/entities/event-paris-design-week.md) (3 mentions)

</div>
<div class="filter-item">

- [Oklahoma City bombing](/entities/event-oklahoma-city-bombing.md) (2 mentions)

</div>
<div class="filter-item">

- [Operation Catacomb](/entities/event-operation-catacomb.md) (2 mentions)

</div>
<div class="filter-item">

- [Orlando nightclub shooting](/entities/event-orlando-nightclub-shooting.md) (2 mentions)

</div>
<div class="filter-item">

- [Parkland](/entities/event-parkland.md) (2 mentions)

</div>
<div class="filter-item">

- [Tucker Carlson speech](/entities/event-tucker-carlson-speech.md) (1 mention)

</div>

</div>

<div class="tab-content tab-content-concept">

_23 concepts sorted by most mentioned_

<div class="filter-item">

- [God](/entities/concept-god.md) (161 mentions)

</div>
<div class="filter-item">

- [Zionism](/entities/concept-zionism.md) (143 mentions)

</div>
<div class="filter-item">

- [MAGA movement](/entities/concept-maga-movement.md) (74 mentions)

</div>
<div class="filter-item">

- [Christians](/entities/concept-christians.md) (40 mentions)

</div>
<div class="filter-item">

- [devil](/entities/concept-devil.md) (24 mentions)

</div>
<div class="filter-item">

- [Doge](/entities/concept-doge.md) (23 mentions)

</div>
<div class="filter-item">

- [MKUltra](/entities/concept-mkultra.md) (20 mentions)

</div>
<div class="filter-item">

- [Operation Mockingbird](/entities/concept-operation-mockingbird.md) (13 mentions)

</div>
<div class="filter-item">

- [Kabbalah](/entities/concept-kabbalah.md) (8 mentions)

</div>
<div class="filter-item">

- [Jewish mystical tradition](/entities/concept-jewish-mystical-tradition.md) (7 mentions)

</div>
<div class="filter-item">

- [transgenderism](/entities/concept-transgenderism.md) (7 mentions)

</div>
<div class="filter-item">

- [Seven Mountain Mandate](/entities/concept-seven-mountain-mandate.md) (6 mentions)

</div>
<div class="filter-item">

- [Big Pharma](/entities/concept-big-pharma.md) (4 mentions)

</div>
<div class="filter-item">

- [Bolsheviks](/entities/concept-bolsheviks.md) (4 mentions)

</div>
<div class="filter-item">

- [Me Too](/entities/concept-me-too.md) (4 mentions)

</div>
<div class="filter-item">

- [Operation Mockingpastor](/entities/concept-operation-mockingpastor.md) (4 mentions)

</div>
<div class="filter-item">

- [Lawfare](/entities/concept-lawfare.md) (3 mentions)

</div>
<div class="filter-item">

- [Palestinians](/entities/concept-palestinians.md) (3 mentions)

</div>
<div class="filter-item">

- [Frankism](/entities/concept-frankism.md) (2 mentions)

</div>
<div class="filter-item">

- [Luciferianism](/entities/concept-luciferianism.md) (2 mentions)

</div>
<div class="filter-item">

- [White Lotus](/entities/concept-white-lotus.md) (2 mentions)

</div>
<div class="filter-item">

- [global state military](/entities/concept-global-state-military.md) (1 mention)

</div>
<div class="filter-item">

- [White Walkers](/entities/concept-white-walkers.md) (1 mention)

</div>

</div>

<div class="tab-content tab-content-date">

_54 dates sorted by most mentioned_

<div class="filter-item">

- [September 10th](/entities/date-september-10th.md) (73 mentions)

</div>
<div class="filter-item">

- [2024](/entities/date-2024.md) (50 mentions)

</div>
<div class="filter-item">

- [2025](/entities/date-2025.md) (45 mentions)

</div>
<div class="filter-item">

- [2018](/entities/date-2018.md) (28 mentions)

</div>
<div class="filter-item">

- [2023](/entities/date-2023.md) (21 mentions)

</div>
<div class="filter-item">

- [September 11th](/entities/date-september-11th.md) (19 mentions)

</div>
<div class="filter-item">

- [September 4th](/entities/date-september-4th.md) (18 mentions)

</div>
<div class="filter-item">

- [July 11th](/entities/date-july-11th.md) (12 mentions)

</div>
<div class="filter-item">

- [December 15th](/entities/date-december-15th.md) (11 mentions)

</div>
<div class="filter-item">

- [October 7th](/entities/date-october-7th.md) (11 mentions)

</div>
<div class="filter-item">

- [2022](/entities/date-2022.md) (10 mentions)

</div>
<div class="filter-item">

- [August 27th](/entities/date-august-27th.md) (7 mentions)

</div>
<div class="filter-item">

- [mid-July](/entities/date-mid-july.md) (7 mentions)

</div>
<div class="filter-item">

- [2017](/entities/date-2017.md) (6 mentions)

</div>
<div class="filter-item">

- [September 2nd](/entities/date-september-2nd.md) (6 mentions)

</div>
<div class="filter-item">

- [1995](/entities/date-1995.md) (4 mentions)

</div>
<div class="filter-item">

- [August 2nd](/entities/date-august-2nd.md) (4 mentions)

</div>
<div class="filter-item">

- [1913](/entities/date-1913.md) (3 mentions)

</div>
<div class="filter-item">

- [April 13th](/entities/date-april-13th.md) (3 mentions)

</div>
<div class="filter-item">

- [December 3rd](/entities/date-december-3rd.md) (3 mentions)

</div>
<div class="filter-item">

- [1960s](/entities/date-the-60s.md) (2 mentions)

</div>
<div class="filter-item">

- [2009](/entities/date-2009.md) (2 mentions)

</div>
<div class="filter-item">

- [2028](/entities/date-2028.md) (2 mentions)

</div>
<div class="filter-item">

- [August 25th](/entities/date-august-25th.md) (2 mentions)

</div>
<div class="filter-item">

- [August 29th](/entities/date-august-29th.md) (2 mentions)

</div>
<div class="filter-item">

- [early November](/entities/date-early-november.md) (2 mentions)

</div>
<div class="filter-item">

- [end of May](/entities/date-end-of-may.md) (2 mentions)

</div>
<div class="filter-item">

- [July 20th](/entities/date-july-20th.md) (2 mentions)

</div>
<div class="filter-item">

- [May 27th](/entities/date-may-27th.md) (2 mentions)

</div>
<div class="filter-item">

- [October 14th](/entities/date-october-14th.md) (2 mentions)

</div>
<div class="filter-item">

- [September 10, 2025](/entities/date-september-10-2025.md) (2 mentions)

</div>
<div class="filter-item">

- [1996](/entities/date-1996.md) (1 mention)

</div>
<div class="filter-item">

- [2005](/entities/date-2005.md) (1 mention)

</div>
<div class="filter-item">

- [2025-09-15](/entities/date-2025-09-15.md) (1 mention)

</div>
<div class="filter-item">

- [2025-09-23](/entities/date-2025-09-23.md) (1 mention)

</div>
<div class="filter-item">

- [2025-10-02](/entities/date-2025-10-02.md) (1 mention)

</div>
<div class="filter-item">

- [April 19th, 2013](/entities/date-april-19th-2013.md) (1 mention)

</div>
<div class="filter-item">

- [April 2024](/entities/date-april-2024.md) (1 mention)

</div>
<div class="filter-item">

- [April 6th, 2018](/entities/date-april-6th-2018.md) (1 mention)

</div>
<div class="filter-item">

- [August 20th](/entities/date-august-20th.md) (1 mention)

</div>
<div class="filter-item">

- [August 24, 2024](/entities/date-august-24-2024.md) (1 mention)

</div>
<div class="filter-item">

- [August 24th–27th](/entities/date-august-24th27th.md) (1 mention)

</div>
<div class="filter-item">

- [August 2nd to the 25th](/entities/date-august-2nd-to-the-25th.md) (1 mention)

</div>
<div class="filter-item">

- [August 6](/entities/date-august-6.md) (1 mention)

</div>
<div class="filter-item">

- [early June](/entities/date-early-june.md) (1 mention)

</div>
<div class="filter-item">

- [July 22nd](/entities/date-july-22nd.md) (1 mention)

</div>
<div class="filter-item">

- [June 2nd](/entities/date-june-2nd.md) (1 mention)

</div>
<div class="filter-item">

- [June 6th, 2024](/entities/date-june-6th-2024.md) (1 mention)

</div>
<div class="filter-item">

- [March 13th, 2024](/entities/date-march-13th-2024.md) (1 mention)

</div>
<div class="filter-item">

- [May 2024](/entities/date-may-2024.md) (1 mention)

</div>
<div class="filter-item">

- [November 1999](/entities/date-november-1999.md) (1 mention)

</div>
<div class="filter-item">

- [November 25th](/entities/date-november-25th.md) (1 mention)

</div>
<div class="filter-item">

- [October 2023](/entities/date-october-2023.md) (1 mention)

</div>
<div class="filter-item">

- [September 30th, 2025](/entities/date-september-30th-2025.md) (1 mention)

</div>

</div>

<div class="tab-content tab-content-vehicle">

_5 vehicles sorted by most mentioned_

<div class="filter-item">

- [SU-BTT](/entities/vehicle-su-btt.md) (38 mentions)

</div>
<div class="filter-item">

- [SU-BND](/entities/vehicle-su-bnd.md) (11 mentions)

</div>
<div class="filter-item">

- [N888KG](/entities/vehicle-n888kg.md) (5 mentions)

</div>
<div class="filter-item">

- [SU-BTU](/entities/vehicle-su-btu.md) (3 mentions)

</div>
<div class="filter-item">

- [N560TW](/entities/vehicle-n560tw.md) (2 mentions)

</div>

</div>

<div class="tab-content tab-content-work">

_33 works & medias sorted by most mentioned_

<div class="filter-item">

- [Make Him a Sandwich](/entities/work-make-him-a-sandwich.md) (40 mentions)

</div>
<div class="filter-item">

- [PBD podcast](/entities/work-pbd-podcast.md) (18 mentions)

</div>
<div class="filter-item">

- [The Matrix](/entities/work-the-matrix.md) (17 mentions)

</div>
<div class="filter-item">

- [Chaos](/entities/work-chaos.md) (16 mentions)

</div>
<div class="filter-item">

- [Becoming Brigitte](/entities/work-becoming-brigitte.md) (14 mentions)

</div>
<div class="filter-item">

- [Good Morning America](/entities/work-good-morning-america.md) (14 mentions)

</div>
<div class="filter-item">

- [Succession](/entities/work-succession.md) (12 mentions)

</div>
<div class="filter-item">

- [The Assault on Truth](/entities/work-the-assault-on-truth.md) (11 mentions)

</div>
<div class="filter-item">

- [The Charlie Kirk Show](/entities/work-the-charlie-kirk-show.md) (8 mentions)

</div>
<div class="filter-item">

- [The Assassination of Candace Owens](/entities/work-the-assassination-of-candace-owens.md) (6 mentions)

</div>
<div class="filter-item">

- [Inside American Education](/entities/work-inside-american-education.md) (3 mentions)

</div>
<div class="filter-item">

- [Israel and Civilization](/entities/work-israel-and-civilization.md) (3 mentions)

</div>
<div class="filter-item">

- [The Invention of the Jewish People](/entities/work-the-invention-of-the-jewish-people.md) (3 mentions)

</div>
<div class="filter-item">

- [The Shawn Ryan Show](/entities/work-the-shawn-ryan-show.md) (3 mentions)

</div>
<div class="filter-item">

- [A Shot in the Dark](/entities/work-a-shot-in-the-dark.md) (2 mentions)

</div>
<div class="filter-item">

- [Blackout](/entities/work-blackout.md) (2 mentions)

</div>
<div class="filter-item">

- [Fox & Friends](/entities/work-fox-and-friends.md) (2 mentions)

</div>
<div class="filter-item">

- [Game of Thrones](/entities/work-game-of-thrones.md) (2 mentions)

</div>
<div class="filter-item">

- [Outnumbered](/entities/work-outnumbered.md) (2 mentions)

</div>
<div class="filter-item">

- [Real Housewives](/entities/work-real-housewives.md) (2 mentions)

</div>
<div class="filter-item">

- [Restaurantology](/entities/work-restaurantology.md) (2 mentions)

</div>
<div class="filter-item">

- [The Five](/entities/work-the-five.md) (2 mentions)

</div>
<div class="filter-item">

- [2 Corinthians 3:17](/entities/work-2-corinthians-3-17.md) (1 mention)

</div>
<div class="filter-item">

- [A Grief Observed](/entities/work-a-grief-observed.md) (1 mention)

</div>
<div class="filter-item">

- [All Falls Down](/entities/work-all-falls-down.md) (1 mention)

</div>
<div class="filter-item">

- [Inside the economics of Candace Owens' media empire and the Macron lawsuit threatening to unravel it.](/entities/work-inside-the-economics-of-candace-owens-media-empire-and-the-macron-lawsuit-threatening-to-unravel-it.md) (1 mention)

</div>
<div class="filter-item">

- [Jeremiah 17:8](/entities/work-jeremiah-17-8.md) (1 mention)

</div>
<div class="filter-item">

- [Lady Ballers](/entities/work-lady-ballers.md) (1 mention)

</div>
<div class="filter-item">

- [Past as Prologue: Safari Club Illuminates Candace Owens' Allegations](/entities/work-past-as-prologue-safari-club-illuminates-candace-owens-allegations.md) (1 mention)

</div>
<div class="filter-item">

- [The Murder of Little Mary Fagan](/entities/work-the-murder-of-little-mary-fagan.md) (1 mention)

</div>
<div class="filter-item">

- [The New Turning Point](/entities/work-the-new-turning-point.md) (1 mention)

</div>
<div class="filter-item">

- [The Revolution](/entities/work-the-revolution.md) (1 mention)

</div>
<div class="filter-item">

- [The Thirteenth Tribe](/entities/work-the-thirteenth-tribe.md) (1 mention)

</div>

</div>

<div class="tab-content tab-content-law">

_2 laws & legislations sorted by most mentioned_

<div class="filter-item">

- [Foreign Agents Registration Act](/entities/law-fara.md) (8 mentions)

</div>
<div class="filter-item">

- [Patriot Act](/entities/law-patriot-act.md) (2 mentions)

</div>

</div>

<div class="tab-content tab-content-anonymous_source">

_23 anonymous sources sorted by most mentioned_

<div class="filter-item">

- [Anonymous Source #1 (Ep 2WEHTk0Xewg)](/entities/anon-src-2WEHTk0Xewg-001.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #1 (Ep 581dILVcEE4)](/entities/anon-src-581dILVcEE4-001.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #1 (Ep 7RLtGgkTh9o)](/entities/anon-src-7RLtGgkTh9o-001.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #1 (Ep aDlhjfW6hz8)](/entities/anon-src-aDlhjfW6hz8-001.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #1 (Ep c5BcKF91iec)](/entities/anon-src-c5BcKF91iec-001.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #1 (Ep iHav0PPzUz8)](/entities/anon-src-iHav0PPzUz8-001.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #1 (Ep JQjCAsfoXEE)](/entities/anon-src-JQjCAsfoXEE-001.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #1 (Ep QZWSsq8ZWzw)](/entities/anon-src-QZWSsq8ZWzw-001.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #1 (Ep SKGUzGHymcI)](/entities/anon-src-SKGUzGHymcI-001.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #1 (Ep sreYYcID-QY)](/entities/anon-src-sreYYcID-QY-001.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #1 (Ep UBkFkg4UNY8)](/entities/anon-src-UBkFkg4UNY8-001.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #1 (Ep ZGxnf5cj4Uw)](/entities/anon-src-ZGxnf5cj4Uw-001.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #2 (Ep 2WEHTk0Xewg)](/entities/anon-src-2WEHTk0Xewg-002.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #2 (Ep 7RLtGgkTh9o)](/entities/anon-src-7RLtGgkTh9o-002.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #2 (Ep aDlhjfW6hz8)](/entities/anon-src-aDlhjfW6hz8-002.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #2 (Ep QZWSsq8ZWzw)](/entities/anon-src-QZWSsq8ZWzw-002.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #2 (Ep sreYYcID-QY)](/entities/anon-src-sreYYcID-QY-002.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #3 (Ep 2WEHTk0Xewg)](/entities/anon-src-2WEHTk0Xewg-003.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #3 (Ep 7RLtGgkTh9o)](/entities/anon-src-7RLtGgkTh9o-003.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #3 (Ep QZWSsq8ZWzw)](/entities/anon-src-QZWSsq8ZWzw-003.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #3 (Ep sreYYcID-QY)](/entities/anon-src-sreYYcID-QY-003.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #4 (Ep 2WEHTk0Xewg)](/entities/anon-src-2WEHTk0Xewg-004.md) (0 mentions)

</div>
<div class="filter-item">

- [Anonymous Source #4 (Ep sreYYcID-QY)](/entities/anon-src-sreYYcID-QY-004.md) (0 mentions)

</div>

</div>
