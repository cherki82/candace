---
title: "Timeline"
---

_Total events: 256_

> **Note:** Events and dates are extracted automatically using AI. Some dates may be approximate or inferred from context.

<div class="page-filter-container">
  <input type="text" class="page-filter" placeholder="Filter events..." autocomplete="off">
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



<style>
/* Era tabs */
.tab-radio { position: absolute; opacity: 0; pointer-events: none; }
.tab-controls { margin-bottom: 1.5em; border-bottom: 2px solid var(--lightgray); display: flex; flex-wrap: wrap; gap: 0.25em; }
.tab-btn { display: inline-block; padding: 0.5em 1em; cursor: pointer; border: 2px solid var(--darkgray); border-bottom: none; border-radius: 6px 6px 0 0; background: var(--darkgray); color: var(--light); user-select: none; position: relative; top: 2px; font-size: 0.9em; margin-bottom: -2px; transition: all 0.15s ease; }
.tab-btn:hover { background: var(--gray); color: var(--light); }
.tab-content { display: none; }
#tab-2025:checked ~ .tab-content-2025 { display: block; }
#tab-2025:checked ~ .tab-controls label[for="tab-2025"] { background: var(--light); border-color: var(--secondary); border-bottom: 2px solid var(--light); color: var(--dark); font-weight: 600; }
#tab-2024:checked ~ .tab-content-2024 { display: block; }
#tab-2024:checked ~ .tab-controls label[for="tab-2024"] { background: var(--light); border-color: var(--secondary); border-bottom: 2px solid var(--light); color: var(--dark); font-weight: 600; }
#tab-historical:checked ~ .tab-content-historical { display: block; }
#tab-historical:checked ~ .tab-controls label[for="tab-historical"] { background: var(--light); border-color: var(--secondary); border-bottom: 2px solid var(--light); color: var(--dark); font-weight: 600; }

/* Year quick-jump */
.year-jump { display: flex; flex-wrap: wrap; gap: 0.5em; margin-bottom: 1.5em; padding: 0.75em; background: var(--highlight); border-radius: 8px; }
.year-jump a { padding: 0.25em 0.6em; background: var(--lightgray); border-radius: 4px; text-decoration: none; color: var(--dark); font-size: 0.85em; font-weight: 500; transition: all 0.15s; }
.year-jump a:hover { background: var(--secondary); color: var(--light); }
.year-jump-label { font-weight: 600; color: var(--gray); font-size: 0.85em; margin-right: 0.5em; align-self: center; }

/* Timeline visual styling */
.timeline-container { position: relative; padding-left: 2rem; }
.timeline-container::before { content: ""; position: absolute; left: 0.5rem; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, var(--secondary), var(--tertiary)); border-radius: 1px; }
.timeline-event { position: relative; margin-bottom: 1.5rem; padding: 1rem; background: var(--light); border: 1px solid var(--lightgray); border-radius: 8px; transition: all 0.2s; }
.timeline-event:hover { border-color: var(--secondary); box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.timeline-event::before { content: ""; position: absolute; left: -1.75rem; top: 1.25rem; width: 12px; height: 12px; background: var(--secondary); border: 3px solid var(--light); border-radius: 50%; box-shadow: 0 0 0 2px var(--secondary); }
.timeline-event.enriched::before { background: var(--tertiary); box-shadow: 0 0 0 2px var(--tertiary); }
.timeline-date { font-size: 0.85em; color: var(--gray); font-weight: 600; margin-bottom: 0.25em; }
.timeline-date .time { color: var(--secondary); }
.timeline-desc { font-size: 1em; color: var(--dark); line-height: 1.5; }
.timeline-desc.truncated { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.timeline-meta { display: flex; flex-wrap: wrap; gap: 0.5em; margin-top: 0.75em; align-items: center; font-size: 0.85em; }
.timeline-badge { padding: 0.15em 0.5em; border-radius: 4px; font-size: 0.8em; font-weight: 500; }
.timeline-badge.enriched { background: color-mix(in srgb, var(--tertiary) 15%, var(--light)); color: var(--tertiary); }
.timeline-badge.mentions { background: var(--lightgray); color: var(--darkgray); }
.timeline-source { font-size: 0.85em; color: var(--gray); }
.timeline-source a { color: var(--secondary); }

/* Share button inline */
.share-btn { background: none; border: none; cursor: pointer; padding: 0.2em 0.4em; font-size: 0.9em; opacity: 0.6; vertical-align: middle; }
.share-btn:hover { opacity: 1; }
</style>


<input type="radio" id="tab-2025" name="timeline-tab" checked class="tab-radio">
<input type="radio" id="tab-2024" name="timeline-tab" class="tab-radio">
<input type="radio" id="tab-historical" name="timeline-tab" class="tab-radio">

<div class="tab-controls">
  <label for="tab-2025" class="tab-btn">2025 (99)</label>
  <label for="tab-2024" class="tab-btn">2024 (13)</label>
  <label for="tab-historical" class="tab-btn">Historical (144)</label>
</div>

<div class="tab-content tab-content-2025">

<div class="timeline-container">

<h2 id="year-2025">2025</h2>

**December**

<div class="timeline-event filter-item" id="event-2025-12-americafest-displayed-a-recreation-of-th">
<div class="timeline-date">2025-12</div>
<div class="timeline-desc"><a href="/events/event-2025-12-americafest-displayed-a-recreation-of-th.md">AmericaFest displayed a recreation of the tent where Charlie Kirk was killed, and attendees took selfies with it.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">3× in 3 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-12: AmericaFest displayed a recreation of the tent where Charlie Kirk was killed, and attendees took selfies with it. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [You Won't Believe What Happened While We Were O... @ 00:10:01](/episodes/ep-OEAHy3SsIiI.md#t-00-09-23)
- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:17:30](/episodes/ep-HYn0P-P1wUw.md#t-00-17-13)
- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:14:49](/episodes/ep-CMcktj3Egfo.md#t-00-14-18)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-12-steve-bannon-responded-at-americafest-by">
<div class="timeline-date">2025-12</div>
<div class="timeline-desc"><a href="/events/event-2025-12-steve-bannon-responded-at-americafest-by.md">Steve Bannon responded at AmericaFest by calling Ben Shapiro a spreading cancer and predicting he would move on Turning Point USA.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-12: Steve Bannon responded at AmericaFest by calling Ben Shapiro a spreading cancer and predicting he would move on Turning Point USA. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:18:09](/episodes/ep-zSKrxIUMNqw.md#t-00-18-02)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-12-aubrey-leitch-worked-through-americafest">
<div class="timeline-date">2025-12</div>
<div class="timeline-desc"><a href="/events/event-2025-12-aubrey-leitch-worked-through-americafest.md">Aubrey Laitsch worked through AmericaFest in Phoenix in December 2025.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-12: Aubrey Laitsch worked through AmericaFest in Phoenix in December 2025. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:25:41](/episodes/ep-mFuno0TuuQQ.md#t-00-25-18)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-12-28-candace-owens-received-a-redacted-screen">
<div class="timeline-date">2025-12-28</div>
<div class="timeline-desc"><a href="/events/event-2025-12-28-candace-owens-received-a-redacted-screen.md">Candace Owens received a redacted screenshot presented as a September 8 conversation between Erika Kirk and Charlie Kirk about dinner.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-12-28: Candace Owens received a redacted screenshot presented as a September 8 conversation between Erika Kirk and Charlie Kirk about dinner. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:18:24](/episodes/ep-HYn0P-P1wUw.md#t-00-17-56)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-12-28-linda-stevenson-was-found-unresponsive-a">
<div class="timeline-date">2025-12-28</div>
<div class="timeline-desc"><a href="/events/event-2025-12-28-linda-stevenson-was-found-unresponsive-a.md">Linda Stevenson was found unresponsive at home and died after lifesaving measures failed.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-12-28: Linda Stevenson was found unresponsive at home and died after lifesaving measures failed. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:47:33](/episodes/ep-QRS_hR7NXaQ.md#t-00-46-57)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-12-20-a-daily-wire-producer-contacted-maggie-w">
<div class="timeline-date">2025-12-20</div>
<div class="timeline-desc"><a href="/events/event-2025-12-20-a-daily-wire-producer-contacted-maggie-w.md">A Daily Wire producer contacted Maggie Wegner about auditioning for a newly conceived solo show two days after Ben Shapiro's AmericaFest speech.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-12-20: A Daily Wire producer contacted Maggie Wegner about auditioning for a newly conceived solo show two days after Ben Shapiro\'s AmericaFest speech. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:06:43](/episodes/ep-zSKrxIUMNqw.md#t-00-06-11)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-12-18-ben-shapiro-spoke-immediately-after-erik">
<div class="timeline-date">2025-12-18</div>
<div class="timeline-desc"><a href="/events/event-2025-12-18-ben-shapiro-spoke-immediately-after-erik.md">Ben Shapiro spoke immediately after Erika Kirk opened AmericaFest and criticized Candace Owens, Tucker Carlson, and Megyn Kelly.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-12-18: Ben Shapiro spoke immediately after Erika Kirk opened AmericaFest and criticized Candace Owens, Tucker Carlson, and Megyn Kelly. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:05:57](/episodes/ep-zSKrxIUMNqw.md#t-00-05-43)
- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:40:10](/episodes/ep-CMcktj3Egfo.md#t-00-39-38)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-12-15-a-turning-point-usa-attorney-requested-t">
<div class="timeline-date">2025-12-15</div>
<div class="timeline-desc"><a href="/events/event-2025-12-15-a-turning-point-usa-attorney-requested-t.md">A Turning Point USA attorney requested that Candace Owens retract disparaging statements.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-12-15: A Turning Point USA attorney requested that Candace Owens retract disparaging statements. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [IN MY LAWSUIT ERA: Our First 'Cease And Desist'... @ 00:08:20](/episodes/ep-GY6GWceEqtQ.md#t-00-07-51)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-12-07-zach-de-gregorio-posted-a-video-titled-t">
<div class="timeline-date">2025-12-07</div>
<div class="timeline-desc"><a href="/events/event-2025-12-07-zach-de-gregorio-posted-a-video-titled-t.md">Zach De Gregorio posted a video titled Top 10 Clowns of the Year.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-12-07: Zach De Gregorio posted a video titled Top 10 Clowns of the Year. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [A Legal Turning Point? | Candace Ep 292 @ 00:27:33](/episodes/ep-NIEbqsLAK8g.md#t-00-27-33)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-12-04-candace-owens-participated-in-a-video-ca">
<div class="timeline-date">2025-12-04</div>
<div class="timeline-desc"><a href="/events/event-2025-12-04-candace-owens-participated-in-a-video-ca.md">Candace Owens participated in a video call concerning termination of her Turning Point USA contract.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-12-04: Candace Owens participated in a video call concerning termination of her Turning Point USA contract. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [IN MY LAWSUIT ERA: Our First 'Cease And Desist'... @ 00:08:13](/episodes/ep-GY6GWceEqtQ.md#t-00-07-51)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-12-02-candace-owenss-turning-point-usa-speakin">
<div class="timeline-date">2025-12-02</div>
<div class="timeline-desc"><a href="/events/event-2025-12-02-candace-owenss-turning-point-usa-speakin.md">Candace Owens's Turning Point USA speaking agreements were terminated.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-12-02: Candace Owens\'s Turning Point USA speaking agreements were terminated. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [IN MY LAWSUIT ERA: Our First 'Cease And Desist'... @ 00:10:34](/episodes/ep-GY6GWceEqtQ.md#t-00-09-56)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-12-02-a-turning-point-usa-attorney-sent-candac">
<div class="timeline-date">2025-12-02</div>
<div class="timeline-desc"><a href="/events/event-2025-12-02-a-turning-point-usa-attorney-sent-candac.md">A Turning Point USA attorney sent Candace Owens a letter about her nondisparagement obligations.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-12-02: A Turning Point USA attorney sent Candace Owens a letter about her nondisparagement obligations. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [IN MY LAWSUIT ERA: Our First 'Cease And Desist'... @ 00:10:10](/episodes/ep-GY6GWceEqtQ.md#t-00-09-56)
- [IN MY LAWSUIT ERA: Our First 'Cease And Desist'... @ 00:14:33](/episodes/ep-GY6GWceEqtQ.md#t-00-14-17)

</details>
</div>

**November**

<div class="timeline-event filter-item" id="event-2025-11-austin-smith-pleaded-guilty-to-attempted">
<div class="timeline-date">2025-11</div>
<div class="timeline-desc"><a href="/events/event-2025-11-austin-smith-pleaded-guilty-to-attempted.md">Austin Smith pleaded guilty to attempted fraudulent schemes and illegal signing of election petitions.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-11: Austin Smith pleaded guilty to attempted fraudulent schemes and illegal signing of election petitions. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:49:16](/episodes/ep-zSKrxIUMNqw.md#t-00-48-53)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-11-additional-complaints-were-filed-allegin">
<div class="timeline-date">2025-11</div>
<div class="timeline-desc"><a href="/events/event-2025-11-additional-complaints-were-filed-allegin.md">Additional complaints were filed alleging abuse at a Harvest-supported children's home in Romania.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-11: Additional complaints were filed alleging abuse at a Harvest-supported children\'s home in Romania. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:34:37](/episodes/ep-ZZGWo6oDscc.md#t-00-34-07)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-11-courage-house-nevada-opened-at-the-washo">
<div class="timeline-date">2025-11</div>
<div class="timeline-desc"><a href="/events/event-2025-11-courage-house-nevada-opened-at-the-washo.md">Courage House Nevada opened at the Washoe County property in November 2025.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-11: Courage House Nevada opened at the Washoe County property in November 2025. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [OH SNAP! We Were Right About Fort Huachuca. | C... @ 00:26:04](/episodes/ep-X92MllIHDzw.md#t-00-25-58)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-11-the-republican-jewish-coalition-held-its">
<div class="timeline-date">2025-11</div>
<div class="timeline-desc"><a href="/events/event-2025-11-the-republican-jewish-coalition-held-its.md">The Republican Jewish Coalition held its 2025 annual leadership conference in Las Vegas.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-11: The Republican Jewish Coalition held its 2025 annual leadership conference in Las Vegas. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Myron Gaines x Candace Owens @ 00:44:55](/episodes/ep-2T39-oADLj0.md#t-00-44-53)

</details>
</div>

**October**

<div class="timeline-event filter-item" id="event-2025-10-15-candace-owens-received-a-relic-associate">
<div class="timeline-date">2025-10-15</div>
<div class="timeline-desc"><a href="/events/event-2025-10-15-candace-owens-received-a-relic-associate.md">Candace Owens received a relic associated with the same cave in Italy as the relics described in the woman's account.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-10-15: Candace Owens received a relic associated with the same cave in Italy as the relics described in the woman\'s account. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [AND ANOTHER ONE: Charlie's Text On September 9t... @ 00:38:11](/episodes/ep-Wjul6YV6izo.md#t-00-37-46)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-10-06-an-unnamed-catholic-woman-sent-candace-o">
<div class="timeline-date">2025-10-06</div>
<div class="timeline-desc"><a href="/events/event-2025-10-06-an-unnamed-catholic-woman-sent-candace-o.md">An unnamed Catholic woman sent Candace Owens an email about her interactions at Charlie Kirk's memorial and subsequent Masses.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-10-06: An unnamed Catholic woman sent Candace Owens an email about her interactions at Charlie Kirk\'s memorial and subsequent Masses. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [AND ANOTHER ONE: Charlie's Text On September 9t... @ 00:38:11](/episodes/ep-Wjul6YV6izo.md#t-00-37-46)

</details>
</div>

**September**

<div class="timeline-event filter-item" id="event-2025-09-two-men-filed-the-original-lawsuits-alle">
<div class="timeline-date">2025-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-two-men-filed-the-original-lawsuits-alle.md">Two men filed the original lawsuits alleging abuse at a Harvest-supported children's home in Romania.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09: Two men filed the original lawsuits alleging abuse at a Harvest-supported children\'s home in Romania. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:33:48](/episodes/ep-ZZGWo6oDscc.md#t-00-33-28)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-candace-owens-said-a-news-report-describ">
<div class="timeline-date">2025-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-candace-owens-said-a-news-report-describ.md">Candace Owens said a news report described a person on a Utah Valley University roof before Charlie Kirk's assassination.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09: Candace Owens said a news report described a person on a Utah Valley University roof before Charlie Kirk\'s assassination. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Myron Gaines x Candace Owens @ 01:02:27](/episodes/ep-2T39-oADLj0.md#t-01-02-21)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-the-turning-point-usa-board-selected-eri">
<div class="timeline-date">2025-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-the-turning-point-usa-board-selected-eri.md">The Turning Point USA board selected Erika Kirk as CEO and chair within about 72 hours of Charlie Kirk's death.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09: The Turning Point USA board selected Erika Kirk as CEO and chair within about 72 hours of Charlie Kirk\'s death. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Loose Lips Sink Ships: ANOTHER Zoom Call Leaks…... @ 00:10:12](/episodes/ep-QdM9jLwjwLw.md#t-00-10-12)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-candace-owens-said-erika-kirk-and-andrew">
<div class="timeline-date">2025-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-candace-owens-said-erika-kirk-and-andrew.md">Candace Owens said Erika Kirk and Andrew Kolvet held a three-way call with Charlie Kirk's surgeon in September 2025.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">3× in 3 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09: Candace Owens said Erika Kirk and Andrew Kolvet held a three-way call with Charlie Kirk\'s surgeon in September 2025. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Loose Lips Sink Ships: ANOTHER Zoom Call Leaks…... @ 00:31:49](/episodes/ep-QdM9jLwjwLw.md#t-00-31-26)
- [REVELATIONS: Macron’s Boyfriend. Erika’s Girlfr... @ 00:22:46](/episodes/ep-DYD_QHMPwqM.md#t-00-22-31)
- [Here’s Why It’s Time For The Police To Question... @ 00:13:11](/episodes/ep-ti5Fxrvegno.md#t-00-12-58)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-candace-owens-said-she-pulled-her-childr">
<div class="timeline-date">2025-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-candace-owens-said-she-pulled-her-childr.md">Candace Owens said she pulled her children out of school days before Charlie Kirk was killed.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09: Candace Owens said she pulled her children out of school days before Charlie Kirk was killed. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:11:23](/episodes/ep-mFuno0TuuQQ.md#t-00-11-10)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-23-the-unnamed-catholic-woman-returned-to-m">
<div class="timeline-date">2025-09-23</div>
<div class="timeline-desc"><a href="/events/event-2025-09-23-the-unnamed-catholic-woman-returned-to-m.md">The unnamed Catholic woman returned to Mass and arranged for relics to be given to Erika Kirk.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-23: The unnamed Catholic woman returned to Mass and arranged for relics to be given to Erika Kirk. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [AND ANOTHER ONE: Charlie's Text On September 9t... @ 00:18:53](/episodes/ep-Wjul6YV6izo.md#t-00-18-42)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-22-erika-kirk-elizabeth-mccoy-and-mikey-mcc">
<div class="timeline-date">2025-09-22</div>
<div class="timeline-desc"><a href="/events/event-2025-09-22-erika-kirk-elizabeth-mccoy-and-mikey-mcc.md">Erika Kirk, Elizabeth McCoy, and Mikey McCoy attended a private dinner.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-22: Erika Kirk, Elizabeth McCoy, and Mikey McCoy attended a private dinner. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [EXCLUSIVE: Leaked TPUSA Audio | Candace EP 296 @ 00:09:35](/episodes/ep-A39g5oqB_eM.md#t-00-09-18)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-22-erika-kirk-led-a-corporate-wide-turning-">
<div class="timeline-date">2025-09-22</div>
<div class="timeline-desc"><a href="/events/event-2025-09-22-erika-kirk-led-a-corporate-wide-turning-.md">Erika Kirk led a corporate-wide Turning Point USA Zoom call.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-22: Erika Kirk led a corporate-wide Turning Point USA Zoom call. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [EXCLUSIVE: Leaked TPUSA Audio | Candace EP 296 @ 00:00:51](/episodes/ep-A39g5oqB_eM.md#t-00-00-40)
- [Loose Lips Sink Ships: ANOTHER Zoom Call Leaks…... @ 00:08:06](/episodes/ep-QdM9jLwjwLw.md#t-00-08-02)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-22-an-unnamed-catholic-woman-attended-morni">
<div class="timeline-date">2025-09-22</div>
<div class="timeline-desc"><a href="/events/event-2025-09-22-an-unnamed-catholic-woman-attended-morni.md">An unnamed Catholic woman attended morning Mass and spoke with Erika Kirk.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-22: An unnamed Catholic woman attended morning Mass and spoke with Erika Kirk. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [AND ANOTHER ONE: Charlie's Text On September 9t... @ 00:16:57](/episodes/ep-Wjul6YV6izo.md#t-00-16-31)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-21-charlie-kirks-public-memorial-was-held-a">
<div class="timeline-date">2025-09-21</div>
<div class="timeline-desc"><a href="/events/event-2025-09-21-charlie-kirks-public-memorial-was-held-a.md">Charlie Kirk's public memorial was held at State Farm Stadium.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">3× in 3 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-21: Charlie Kirk\'s public memorial was held at State Farm Stadium. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [EXCLUSIVE: Leaked TPUSA Audio | Candace EP 296 @ 00:09:35](/episodes/ep-A39g5oqB_eM.md#t-00-09-18)
- [AND ANOTHER ONE: Charlie's Text On September 9t... @ 00:13:55](/episodes/ep-Wjul6YV6izo.md#t-00-13-55)
- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:25:49](/episodes/ep-mFuno0TuuQQ.md#t-00-25-18)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-20-a-private-catholic-funeral-mass-was-held">
<div class="timeline-date">2025-09-20 <span class='time'>11:00</span></div>
<div class="timeline-desc"><a href="/events/event-2025-09-20-a-private-catholic-funeral-mass-was-held.md">A private Catholic funeral Mass was held for Charlie Kirk.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-20 11:00: A private Catholic funeral Mass was held for Charlie Kirk. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [EXCLUSIVE: Leaked TPUSA Audio | Candace EP 296 @ 00:09:35](/episodes/ep-A39g5oqB_eM.md#t-00-09-18)
- [AND ANOTHER ONE: Charlie's Text On September 9t... @ 00:14:21](/episodes/ep-Wjul6YV6izo.md#t-00-13-55)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-18-erika-kirk-gave-an-in-person-interview-t">
<div class="timeline-date">2025-09-18</div>
<div class="timeline-desc"><a href="/events/event-2025-09-18-erika-kirk-gave-an-in-person-interview-t.md">Erika Kirk gave an in-person interview to The New York Times.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-18: Erika Kirk gave an in-person interview to The New York Times. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [EXCLUSIVE: Leaked TPUSA Audio | Candace EP 296 @ 00:06:18](/episodes/ep-A39g5oqB_eM.md#t-00-05-46)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-17-turning-point-usa-publicly-announced-eri">
<div class="timeline-date">2025-09-17</div>
<div class="timeline-desc"><a href="/events/event-2025-09-17-turning-point-usa-publicly-announced-eri.md">Turning Point USA publicly announced Erika Kirk as CEO and chair in a letter.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-17: Turning Point USA publicly announced Erika Kirk as CEO and chair in a letter. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Loose Lips Sink Ships: ANOTHER Zoom Call Leaks…... @ 00:08:58](/episodes/ep-QdM9jLwjwLw.md#t-00-08-46)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-16-erika-kirk-held-a-zoom-call-with-turning">
<div class="timeline-date">2025-09-16</div>
<div class="timeline-desc"><a href="/events/event-2025-09-16-erika-kirk-held-a-zoom-call-with-turning.md">Erika Kirk held a Zoom call with Turning Point USA employees five days after Charlie Kirk's assassination.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">4× in 4 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-16: Erika Kirk held a Zoom call with Turning Point USA employees five days after Charlie Kirk\'s assassination. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Erika’s Inquisition: TPUSA Employees FIRED For…... @ 00:35:06](/episodes/ep-gG4ZoYUjUc8.md#t-00-34-39)
- [Loose Lips Sink Ships: ANOTHER Zoom Call Leaks…... @ 00:08:47](/episodes/ep-QdM9jLwjwLw.md#t-00-08-46)
- [AND ANOTHER ONE: Charlie's Text On September 9t... @ 00:02:04](/episodes/ep-Wjul6YV6izo.md#t-00-01-30)
- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:24:01](/episodes/ep-QRS_hR7NXaQ.md#t-00-24-01)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-12-erika-kirk-said-on-television-that-turni">
<div class="timeline-date">2025-09-12</div>
<div class="timeline-desc"><a href="/events/event-2025-09-12-erika-kirk-said-on-television-that-turni.md">Erika Kirk said on television that Turning Point USA would continue and become bigger than ever.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">3× in 3 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-12: Erika Kirk said on television that Turning Point USA would continue and become bigger than ever. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Loose Lips Sink Ships: ANOTHER Zoom Call Leaks…... @ 00:18:04](/episodes/ep-QdM9jLwjwLw.md#t-00-17-35)
- [AND ANOTHER ONE: Charlie's Text On September 9t... @ 00:10:19](/episodes/ep-Wjul6YV6izo.md#t-00-10-19)
- [Halftime Wars: TPUSA vs The NFL | Candace Ep 304 @ 00:15:23](/episodes/ep-4YgrOhhy708.md#t-00-14-46)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-11-tyler-robinson-called-out-of-work-early-">
<div class="timeline-date">2025-09-11</div>
<div class="timeline-desc"><a href="/events/event-2025-09-11-tyler-robinson-called-out-of-work-early-.md">Tyler Robinson called out of work early in the morning, citing food poisoning.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-11: Tyler Robinson called out of work early in the morning, citing food poisoning. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:13:07](/episodes/ep-HYn0P-P1wUw.md#t-00-12-29)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-11-charlie-kirk-was-scheduled-to-speak-at-c">
<div class="timeline-date">2025-09-11</div>
<div class="timeline-desc"><a href="/events/event-2025-09-11-charlie-kirk-was-scheduled-to-speak-at-c.md">Charlie Kirk was scheduled to speak at Charis Bible College in Woodland Park, Colorado; after his assassination the event became a vigil.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-11: Charlie Kirk was scheduled to speak at Charis Bible College in Woodland Park, Colorado; after his assassination the event became a vigil. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 00:04:01](/episodes/ep-wcD2khO3rOA.md#t-00-03-29)
- [Candace x Baron Coleman LIVE!! | Candace Ep 293 @ 00:16:07](/episodes/ep-9naMwS0kMBE.md#t-00-16-07)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-10-tyler-robinson-arrived-at-cowboy-smokeho">
<div class="timeline-date">2025-09-10 <span class='time'>20:45</span></div>
<div class="timeline-desc"><a href="/events/event-2025-09-10-tyler-robinson-arrived-at-cowboy-smokeho.md">Tyler Robinson arrived at Cowboy Smokehouse in Panguitch, Utah, ate at the bar, and left at approximately 9:30 p.m.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-10 20:45: Tyler Robinson arrived at Cowboy Smokehouse in Panguitch, Utah, ate at the bar, and left at approximately 9:30 p.m. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:10:04](/episodes/ep-HYn0P-P1wUw.md#t-00-09-43)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-10-candace-owens-said-a-plane-carrying-erik">
<div class="timeline-date">2025-09-10 <span class='time'>14:19</span></div>
<div class="timeline-desc"><a href="/events/event-2025-09-10-candace-owens-said-a-plane-carrying-erik.md">Candace Owens said a plane carrying Erika Kirk, Tyler Bowyer, Elizabeth McCoy, and a priest departed for Provo after Charlie Kirk's assassination.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-10 14:19: Candace Owens said a plane carrying Erika Kirk, Tyler Bowyer, Elizabeth McCoy, and a priest departed for Provo after Charlie Kirk\'s assassination. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Baron Coleman LIVE!! | Candace Ep 293 @ 01:08:51](/episodes/ep-9naMwS0kMBE.md#t-01-08-36)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-10-charlie-kirk-was-assassinated-at-utah-va">
<div class="timeline-date">2025-09-10</div>
<div class="timeline-desc"><a href="/events/event-2025-09-10-charlie-kirk-was-assassinated-at-utah-va.md">Charlie Kirk was assassinated at Utah Valley University.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">22× in 17 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-10: Charlie Kirk was assassinated at Utah Valley University. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [You Won't Believe What Happened While We Were O... @ 00:10:01](/episodes/ep-OEAHy3SsIiI.md#t-00-09-23)
- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:00:49](/episodes/ep-HYn0P-P1wUw.md#t-00-00-45)
- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:16:42](/episodes/ep-zSKrxIUMNqw.md#t-00-16-36)
- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:47:11](/episodes/ep-zSKrxIUMNqw.md#t-00-46-45)
- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:47:30](/episodes/ep-zSKrxIUMNqw.md#t-00-47-30)
- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:58:59](/episodes/ep-zSKrxIUMNqw.md#t-00-58-25)
- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 00:17:51](/episodes/ep-wcD2khO3rOA.md#t-00-17-24)
- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:11:31](/episodes/ep-CMcktj3Egfo.md#t-00-11-30)
- [Myron Gaines x Candace Owens @ 00:52:43](/episodes/ep-2T39-oADLj0.md#t-00-52-09)
- [A Legal Turning Point? | Candace Ep 292 @ 00:06:17](/episodes/ep-NIEbqsLAK8g.md#t-00-06-17)
- [Candace x Baron Coleman LIVE!! | Candace Ep 293 @ 00:07:26](/episodes/ep-9naMwS0kMBE.md#t-00-07-14)
- [IN MY LAWSUIT ERA: Our First 'Cease And Desist'... @ 00:07:08](/episodes/ep-GY6GWceEqtQ.md#t-00-07-08)
- [IN MY LAWSUIT ERA: Our First 'Cease And Desist'... @ 00:21:04](/episodes/ep-GY6GWceEqtQ.md#t-00-20-34)
- [IN MY LAWSUIT ERA: Our First 'Cease And Desist'... @ 00:21:19](/episodes/ep-GY6GWceEqtQ.md#t-00-20-34)
- [Erika’s Inquisition: TPUSA Employees FIRED For…... @ 00:35:06](/episodes/ep-gG4ZoYUjUc8.md#t-00-34-39)
- [EXCLUSIVE: Leaked TPUSA Audio | Candace EP 296 @ 00:06:03](/episodes/ep-A39g5oqB_eM.md#t-00-05-46)
- [Loose Lips Sink Ships: ANOTHER Zoom Call Leaks…... @ 00:00:34](/episodes/ep-QdM9jLwjwLw.md#t-00-00-00)
- [AND ANOTHER ONE: Charlie's Text On September 9t... @ 00:10:13](/episodes/ep-Wjul6YV6izo.md#t-00-10-13)
- [REVELATIONS: Macron’s Boyfriend. Erika’s Girlfr... @ 00:22:07](/episodes/ep-DYD_QHMPwqM.md#t-00-21-46)
- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:27:14](/episodes/ep-mFuno0TuuQQ.md#t-00-27-14)
- [Halftime Wars: TPUSA vs The NFL | Candace Ep 304 @ 00:14:46](/episodes/ep-4YgrOhhy708.md#t-00-14-03)
- [Here’s Why It’s Time For The Police To Question... @ 00:11:01](/episodes/ep-ti5Fxrvegno.md#t-00-10-49)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-10-tyler-robinson-called-out-of-work-saying">
<div class="timeline-date">2025-09-10</div>
<div class="timeline-desc"><a href="/events/event-2025-09-10-tyler-robinson-called-out-of-work-saying.md">Tyler Robinson called out of work, saying he needed to help his grandmother move furniture.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-10: Tyler Robinson called out of work, saying he needed to help his grandmother move furniture. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:13:15](/episodes/ep-HYn0P-P1wUw.md#t-00-13-13)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-10-bomb-detection-dogs-failed-to-find-the-r">
<div class="timeline-date">2025-09-10</div>
<details><summary class="timeline-desc truncated"><a href="/events/event-2025-09-10-bomb-detection-dogs-failed-to-find-the-r.md">Bomb-detection dogs failed to find the recently discharged weapon after Charlie Kirk's shooting, and federal agents directed three rookie officers ...</a></summary>
<p class="timeline-desc"><a href="/events/event-2025-09-10-bomb-detection-dogs-failed-to-find-the-r.md">Bomb-detection dogs failed to find the recently discharged weapon after Charlie Kirk's shooting, and federal agents directed three rookie officers to locate it.</a></p>
</details>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-10: Bomb-detection dogs failed to find the recently discharged weapon after Charlie Kirk\'s shooting, and federal agents directed three rookie officers to locate it. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:16:33](/episodes/ep-HYn0P-P1wUw.md#t-00-15-58)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-10-candace-owens-said-andrew-kolvet-arrived">
<div class="timeline-date">2025-09-10</div>
<div class="timeline-desc"><a href="/events/event-2025-09-10-candace-owens-said-andrew-kolvet-arrived.md">Candace Owens said Andrew Kolvet arrived by plane in Provo on September 10 and collapsed crying into Erika Kirk's arms.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">3× in 3 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-10: Candace Owens said Andrew Kolvet arrived by plane in Provo on September 10 and collapsed crying into Erika Kirk\'s arms. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Loose Lips Sink Ships: ANOTHER Zoom Call Leaks…... @ 00:06:53](/episodes/ep-QdM9jLwjwLw.md#t-00-06-35)
- [REVELATIONS: Macron’s Boyfriend. Erika’s Girlfr... @ 00:25:17](/episodes/ep-DYD_QHMPwqM.md#t-00-24-40)
- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:20:05](/episodes/ep-mFuno0TuuQQ.md#t-00-20-05)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-10-the-new-york-times-reported-that-erika-k">
<div class="timeline-date">2025-09-10</div>
<details><summary class="timeline-desc truncated"><a href="/events/event-2025-09-10-the-new-york-times-reported-that-erika-k.md">The New York Times reported that Erika Kirk was at a hospital while her mother received treatment when Mikey McCoy called; Candace Owens said the v...</a></summary>
<p class="timeline-desc"><a href="/events/event-2025-09-10-the-new-york-times-reported-that-erika-k.md">The New York Times reported that Erika Kirk was at a hospital while her mother received treatment when Mikey McCoy called; Candace Owens said the venue was a holistic clinic.</a></p>
</details>
<div class="timeline-meta">
<span class="timeline-badge mentions">3× in 3 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-10: The New York Times reported that Erika Kirk was at a hospital while her mother received treatment when Mikey McCoy called; Candace Owens said the venue was a holistic clinic. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:24:54](/episodes/ep-QRS_hR7NXaQ.md#t-00-24-42)
- [REVELATIONS: Macron’s Boyfriend. Erika’s Girlfr... @ 00:21:13](/episodes/ep-DYD_QHMPwqM.md#t-00-21-01)
- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:19:08](/episodes/ep-mFuno0TuuQQ.md#t-00-19-08)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-10-candace-owens-alleged-that-erika-kirk-wa">
<div class="timeline-date">2025-09-10</div>
<div class="timeline-desc"><a href="/events/event-2025-09-10-candace-owens-alleged-that-erika-kirk-wa.md">Candace Owens alleged that Erika Kirk was with Tracy Martin when Mikey and Elizabeth McCoy called on September 10, 2025.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-10: Candace Owens alleged that Erika Kirk was with Tracy Martin when Mikey and Elizabeth McCoy called on September 10, 2025. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [REVELATIONS: Macron’s Boyfriend. Erika’s Girlfr... @ 00:27:48](/episodes/ep-DYD_QHMPwqM.md#t-00-27-33)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-10-candace-owens-said-one-egyptian-plane-de">
<div class="timeline-date">2025-09-10</div>
<div class="timeline-desc"><a href="/events/event-2025-09-10-candace-owens-said-one-egyptian-plane-de.md">Candace Owens said one Egyptian plane departed on the morning of Charlie Kirk's assassination.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-10: Candace Owens said one Egyptian plane departed on the morning of Charlie Kirk\'s assassination. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [REVELATIONS: Macron’s Boyfriend. Erika’s Girlfr... @ 00:35:07](/episodes/ep-DYD_QHMPwqM.md#t-00-34-32)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-10-candace-owens-said-another-egyptian-plan">
<div class="timeline-date">2025-09-10</div>
<div class="timeline-desc"><a href="/events/event-2025-09-10-candace-owens-said-another-egyptian-plan.md">Candace Owens said another Egyptian plane remained on the tarmac and transmitted intermittently on the day of Charlie Kirk's assassination.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-10: Candace Owens said another Egyptian plane remained on the tarmac and transmitted intermittently on the day of Charlie Kirk\'s assassination. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [REVELATIONS: Macron’s Boyfriend. Erika’s Girlfr... @ 00:35:14](/episodes/ep-DYD_QHMPwqM.md#t-00-35-14)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-10-candace-owens-said-erika-kirk-described-">
<div class="timeline-date">2025-09-10</div>
<div class="timeline-desc"><a href="/events/event-2025-09-10-candace-owens-said-erika-kirk-described-.md">Candace Owens said Erika Kirk described Charlie Kirk retrieving his wedding band on the morning he was killed.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-10: Candace Owens said Erika Kirk described Charlie Kirk retrieving his wedding band on the morning he was killed. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:12:10](/episodes/ep-mFuno0TuuQQ.md#t-00-11-55)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-10-candace-owens-said-pierre-falcone-called">
<div class="timeline-date">2025-09-10</div>
<div class="timeline-desc"><a href="/events/event-2025-09-10-candace-owens-said-pierre-falcone-called.md">Candace Owens said Pierre Falcone called Justin Streif shortly after Charlie Kirk was shot.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-10: Candace Owens said Pierre Falcone called Justin Streif shortly after Charlie Kirk was shot. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:13:29](/episodes/ep-mFuno0TuuQQ.md#t-00-13-22)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-10-candace-owens-said-pierre-falcone-also-c">
<div class="timeline-date">2025-09-10</div>
<div class="timeline-desc"><a href="/events/event-2025-09-10-candace-owens-said-pierre-falcone-also-c.md">Candace Owens said Pierre Falcone also called Don Orico shortly after Charlie Kirk was shot.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-10: Candace Owens said Pierre Falcone also called Don Orico shortly after Charlie Kirk was shot. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:13:36](/episodes/ep-mFuno0TuuQQ.md#t-00-13-22)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-10-erika-kirk-said-she-landed-in-utah-and-w">
<div class="timeline-date">2025-09-10</div>
<div class="timeline-desc"><a href="/events/event-2025-09-10-erika-kirk-said-she-landed-in-utah-and-w.md">Erika Kirk said she landed in Utah and went directly to the hospital.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-10: Erika Kirk said she landed in Utah and went directly to the hospital. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:19:56](/episodes/ep-mFuno0TuuQQ.md#t-00-19-56)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-10-aubrey-leitch-received-hundreds-of-phone">
<div class="timeline-date">2025-09-10</div>
<div class="timeline-desc"><a href="/events/event-2025-09-10-aubrey-leitch-received-hundreds-of-phone.md">Aubrey Laitsch received hundreds of phone calls and thousands of text messages on September 10, 2025.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-10: Aubrey Laitsch received hundreds of phone calls and thousands of text messages on September 10, 2025. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:25:36](/episodes/ep-mFuno0TuuQQ.md#t-00-25-18)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-10-candace-owens-said-tracy-martins-daughte">
<div class="timeline-date">2025-09-10</div>
<div class="timeline-desc"><a href="/events/event-2025-09-10-candace-owens-said-tracy-martins-daughte.md">Candace Owens said Tracy Martin's daughter had been scheduled to be at UVU but did not attend after Martin said she had a bad feeling.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-10: Candace Owens said Tracy Martin\'s daughter had been scheduled to be at UVU but did not attend after Martin said she had a bad feeling. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Halftime Wars: TPUSA vs The NFL | Candace Ep 304 @ 00:25:22](/episodes/ep-4YgrOhhy708.md#t-00-25-22)
- [Here’s Why It’s Time For The Police To Question... @ 00:04:15](/episodes/ep-ti5Fxrvegno.md#t-00-03-37)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-09-josh-hammer-said-charlie-kirk-held-a-zoo">
<div class="timeline-date">2025-09-09 <span class='time'>18:00</span></div>
<div class="timeline-desc"><a href="/events/event-2025-09-09-josh-hammer-said-charlie-kirk-held-a-zoo.md">Josh Hammer said Charlie Kirk held a Zoom call with him and an Israel-based rabbi.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-09 18:00: Josh Hammer said Charlie Kirk held a Zoom call with him and an Israel-based rabbi. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BAAL SO HARD: The Epstein Files | Candace Ep 300 @ 00:39:56](/episodes/ep-CEF7gQRWYCE.md#t-00-39-33)
- [Here’s Why It’s Time For The Police To Question... @ 00:05:57](/episodes/ep-ti5Fxrvegno.md#t-00-05-37)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-09-candace-owens-said-charlie-kirk-sent-a-t">
<div class="timeline-date">2025-09-09 <span class='time'>15:54</span></div>
<div class="timeline-desc"><a href="/events/event-2025-09-09-candace-owens-said-charlie-kirk-sent-a-t.md">Candace Owens said Charlie Kirk sent a text saying he was abandoning the pro-Israel cause.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-09 15:54: Candace Owens said Charlie Kirk sent a text saying he was abandoning the pro-Israel cause. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BAAL SO HARD: The Epstein Files | Candace Ep 300 @ 00:39:12](/episodes/ep-CEF7gQRWYCE.md#t-00-38-44)
- [Here’s Why It’s Time For The Police To Question... @ 00:05:31](/episodes/ep-ti5Fxrvegno.md#t-00-04-56)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-09-mitch-snow-alleged-that-he-saw-brian-har">
<div class="timeline-date">2025-09-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-09-mitch-snow-alleged-that-he-saw-brian-har.md">Mitch Snow alleged that he saw Brian Harpole at a senior-level meeting at Fort Huachuca.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-09: Mitch Snow alleged that he saw Brian Harpole at a senior-level meeting at Fort Huachuca. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [You Won't Believe What Happened While We Were O... @ 00:38:35](/episodes/ep-OEAHy3SsIiI.md#t-00-38-27)
- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:16:07](/episodes/ep-HYn0P-P1wUw.md#t-00-15-58)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-09-military-personnel-called-mitch-snows-so">
<div class="timeline-date">2025-09-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-09-military-personnel-called-mitch-snows-so.md">Military personnel called Mitch Snow's son and said he was listed as Mitch Snow's primary emergency contact.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-09: Military personnel called Mitch Snow\'s son and said he was listed as Mitch Snow\'s primary emergency contact. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [You Won't Believe What Happened While We Were O... @ 00:46:54](/episodes/ep-OEAHy3SsIiI.md#t-00-46-51)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-09-candace-owens-reported-that-charlie-kirk">
<div class="timeline-date">2025-09-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-09-candace-owens-reported-that-charlie-kirk.md">Candace Owens reported that Charlie Kirk sent Andrew Kolvet a text expressing fear that he would be killed.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">7× in 7 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-09: Candace Owens reported that Charlie Kirk sent Andrew Kolvet a text expressing fear that he would be killed. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [You Won't Believe What Happened While We Were O... @ 00:51:06](/episodes/ep-OEAHy3SsIiI.md#t-00-51-04)
- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:15:32](/episodes/ep-HYn0P-P1wUw.md#t-00-15-17)
- [Myron Gaines x Candace Owens @ 00:58:22](/episodes/ep-2T39-oADLj0.md#t-00-58-22)
- [Candace x Baron Coleman LIVE!! | Candace Ep 293 @ 00:59:10](/episodes/ep-9naMwS0kMBE.md#t-00-58-54)
- [BAAL SO HARD: The Epstein Files | Candace Ep 300 @ 00:43:56](/episodes/ep-CEF7gQRWYCE.md#t-00-43-43)
- [REVELATIONS: Macron’s Boyfriend. Erika’s Girlfr... @ 00:23:21](/episodes/ep-DYD_QHMPwqM.md#t-00-23-11)
- [Here’s Why It’s Time For The Police To Question... @ 00:07:59](/episodes/ep-ti5Fxrvegno.md#t-00-07-26)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-09-the-arizona-commanders-summit-began-at-d">
<div class="timeline-date">2025-09-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-09-the-arizona-commanders-summit-began-at-d.md">The Arizona Commanders Summit began at Davis-Monthan Air Force Base, bringing Arizona community leaders together with military commanders.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-09: The Arizona Commanders Summit began at Davis-Monthan Air Force Base, bringing Arizona community leaders together with military commanders. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:38:33](/episodes/ep-HYn0P-P1wUw.md#t-00-38-31)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-09-south-korean-pastor-hyun-bo-son-was-arre">
<div class="timeline-date">2025-09-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-09-south-korean-pastor-hyun-bo-son-was-arre.md">South Korean pastor Hyun-bo Son was arrested on election-law charges days after meeting Charlie Kirk.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-09: South Korean pastor Hyun-bo Son was arrested on election-law charges days after meeting Charlie Kirk. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 01:08:48](/episodes/ep-wcD2khO3rOA.md#t-01-08-24)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-09-an-unnamed-fort-huachuca-servicemember-a">
<div class="timeline-date">2025-09-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-09-an-unnamed-fort-huachuca-servicemember-a.md">An unnamed Fort Huachuca servicemember alleged seeing Erika Kirk at Fort Huachuca on September 9, 2025.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-09: An unnamed Fort Huachuca servicemember alleged seeing Erika Kirk at Fort Huachuca on September 9, 2025. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [OH SNAP! We Were Right About Fort Huachuca. | C... @ 00:11:29](/episodes/ep-X92MllIHDzw.md#t-00-11-29)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-09-charlie-kirk-texted-tpusa-employees-that">
<div class="timeline-date">2025-09-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-09-charlie-kirk-texted-tpusa-employees-that.md">Charlie Kirk texted TPUSA employees that he wanted to invite Candace Owens to AmericaFest.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">3× in 3 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-09: Charlie Kirk texted TPUSA employees that he wanted to invite Candace Owens to AmericaFest. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Erika’s Inquisition: TPUSA Employees FIRED For…... @ 00:05:58](/episodes/ep-gG4ZoYUjUc8.md#t-00-05-42)
- [BAAL SO HARD: The Epstein Files | Candace Ep 300 @ 00:43:00](/episodes/ep-CEF7gQRWYCE.md#t-00-43-00)
- [Here’s Why It’s Time For The Police To Question... @ 00:05:37](/episodes/ep-ti5Fxrvegno.md#t-00-05-37)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-09-charlie-kirk-sent-erika-kirk-and-a-pries">
<div class="timeline-date">2025-09-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-09-charlie-kirk-sent-erika-kirk-and-a-pries.md">Charlie Kirk sent Erika Kirk and a priest a group-chat message quoting 1 Corinthians 16:9.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-09: Charlie Kirk sent Erika Kirk and a priest a group-chat message quoting 1 Corinthians 16:9. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [AND ANOTHER ONE: Charlie's Text On September 9t... @ 00:22:33](/episodes/ep-Wjul6YV6izo.md#t-00-22-23)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-09-candace-owens-said-charlie-kirk-had-dinn">
<div class="timeline-date">2025-09-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-09-candace-owens-said-charlie-kirk-had-dinn.md">Candace Owens said Charlie Kirk had dinner with his family and a priest who prayed over him.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-09: Candace Owens said Charlie Kirk had dinner with his family and a priest who prayed over him. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BAAL SO HARD: The Epstein Files | Candace Ep 300 @ 00:43:47](/episodes/ep-CEF7gQRWYCE.md#t-00-43-43)
- [Here’s Why It’s Time For The Police To Question... @ 00:08:18](/episodes/ep-ti5Fxrvegno.md#t-00-08-07)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-09-candace-owens-said-charlie-kirk-appeared">
<div class="timeline-date">2025-09-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-09-candace-owens-said-charlie-kirk-appeared.md">Candace Owens said Charlie Kirk appeared on The Will Cain Show from his TPUSA office.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-09: Candace Owens said Charlie Kirk appeared on The Will Cain Show from his TPUSA office. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BAAL SO HARD: The Epstein Files | Candace Ep 300 @ 00:41:13](/episodes/ep-CEF7gQRWYCE.md#t-00-40-46)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-09-candace-owens-said-residents-at-erika-ki">
<div class="timeline-date">2025-09-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-09-candace-owens-said-residents-at-erika-ki.md">Candace Owens said residents at Erika Kirk's apartment complex reported seeing her on September 9 but not September 8.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-09: Candace Owens said residents at Erika Kirk\'s apartment complex reported seeing her on September 9 but not September 8. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:30:08](/episodes/ep-QRS_hR7NXaQ.md#t-00-30-01)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-09-candace-owens-quoted-erika-kirk-as-sayin">
<div class="timeline-date">2025-09-09</div>
<div class="timeline-desc"><a href="/events/event-2025-09-09-candace-owens-quoted-erika-kirk-as-sayin.md">Candace Owens quoted Erika Kirk as saying Charlie Kirk could not sleep the night before he was killed.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-09: Candace Owens quoted Erika Kirk as saying Charlie Kirk could not sleep the night before he was killed. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:10:09](/episodes/ep-mFuno0TuuQQ.md#t-00-09-43)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-08-frank-turek-said-he-took-a-long-walk-wit">
<div class="timeline-date">2025-09-08 <span class='time'>20:00</span></div>
<div class="timeline-desc"><a href="/events/event-2025-09-08-frank-turek-said-he-took-a-long-walk-wit.md">Frank Turek said he took a long walk with Charlie Kirk around 8 p.m.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-08 20:00: Frank Turek said he took a long walk with Charlie Kirk around 8 p.m. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BAAL SO HARD: The Epstein Files | Candace Ep 300 @ 00:46:29](/episodes/ep-CEF7gQRWYCE.md#t-00-46-11)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-08-candace-owens-said-erika-kirk-texted-cha">
<div class="timeline-date">2025-09-08 <span class='time'>18:06</span></div>
<div class="timeline-desc"><a href="/events/event-2025-09-08-candace-owens-said-erika-kirk-texted-cha.md">Candace Owens said Erika Kirk texted Charlie Kirk that dinner was ready at 6:06 p.m. Arizona time.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-08 18:06: Candace Owens said Erika Kirk texted Charlie Kirk that dinner was ready at 6:06 p.m. Arizona time. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BAAL SO HARD: The Epstein Files | Candace Ep 300 @ 00:46:19](/episodes/ep-CEF7gQRWYCE.md#t-00-46-11)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-08-candace-owens-said-charlie-kirk-hosted-h">
<div class="timeline-date">2025-09-08 <span class='time'>10:00</span></div>
<div class="timeline-desc"><a href="/events/event-2025-09-08-candace-owens-said-charlie-kirk-hosted-h.md">Candace Owens said Charlie Kirk hosted his show from his home studio from 10 to 11 a.m. Arizona time.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-08 10:00: Candace Owens said Charlie Kirk hosted his show from his home studio from 10 to 11 a.m. Arizona time. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BAAL SO HARD: The Epstein Files | Candace Ep 300 @ 00:45:24](/episodes/ep-CEF7gQRWYCE.md#t-00-45-12)
- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:29:35](/episodes/ep-QRS_hR7NXaQ.md#t-00-29-18)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-08-mitch-snow-alleged-that-he-saw-erika-kir">
<div class="timeline-date">2025-09-08</div>
<div class="timeline-desc"><a href="/events/event-2025-09-08-mitch-snow-alleged-that-he-saw-erika-kir.md">Mitch Snow alleged that he saw Erika Kirk leaving the Candlewood Suites hotel at Fort Huachuca with someone resembling Cabot Phillips.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-08: Mitch Snow alleged that he saw Erika Kirk leaving the Candlewood Suites hotel at Fort Huachuca with someone resembling Cabot Phillips. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [You Won't Believe What Happened While We Were O... @ 00:38:11](/episodes/ep-OEAHy3SsIiI.md#t-00-37-47)
- [Halftime Wars: TPUSA vs The NFL | Candace Ep 304 @ 00:18:51](/episodes/ep-4YgrOhhy708.md#t-00-18-36)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-08-candace-owens-said-a-text-chain-message-">
<div class="timeline-date">2025-09-08</div>
<div class="timeline-desc"><a href="/events/event-2025-09-08-candace-owens-said-a-text-chain-message-.md">Candace Owens said a text-chain message showed Charlie Kirk was done with the pro-Israel cause.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-08: Candace Owens said a text-chain message showed Charlie Kirk was done with the pro-Israel cause. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Myron Gaines x Candace Owens @ 00:58:05](/episodes/ep-2T39-oADLj0.md#t-00-57-40)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-08-candace-owens-said-megyn-kelly-was-told-">
<div class="timeline-date">2025-09-08</div>
<div class="timeline-desc"><a href="/events/event-2025-09-08-candace-owens-said-megyn-kelly-was-told-.md">Candace Owens said Megyn Kelly was told that a priest visited Charlie Kirk to pray about a Jezebel article.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-08: Candace Owens said Megyn Kelly was told that a priest visited Charlie Kirk to pray about a Jezebel article. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Baron Coleman LIVE!! | Candace Ep 293 @ 01:00:46](/episodes/ep-9naMwS0kMBE.md#t-01-00-46)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-08-candace-owens-said-charlie-kirk-appeared">
<div class="timeline-date">2025-09-08</div>
<div class="timeline-desc"><a href="/events/event-2025-09-08-candace-owens-said-charlie-kirk-appeared.md">Candace Owens said Charlie Kirk appeared on The Ingraham Angle from his home studio.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-08: Candace Owens said Charlie Kirk appeared on The Ingraham Angle from his home studio. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BAAL SO HARD: The Epstein Files | Candace Ep 300 @ 00:45:32](/episodes/ep-CEF7gQRWYCE.md#t-00-45-32)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-08-candace-owens-said-jezebel-published-an-">
<div class="timeline-date">2025-09-08</div>
<div class="timeline-desc"><a href="/events/event-2025-09-08-candace-owens-said-jezebel-published-an-.md">Candace Owens said Jezebel published an article about a witch's curse targeting Charlie Kirk.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-08: Candace Owens said Jezebel published an article about a witch\'s curse targeting Charlie Kirk. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BAAL SO HARD: The Epstein Files | Candace Ep 300 @ 00:46:06](/episodes/ep-CEF7gQRWYCE.md#t-00-45-32)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-08-candace-owens-said-charlie-kirk-returned">
<div class="timeline-date">2025-09-08</div>
<div class="timeline-desc"><a href="/events/event-2025-09-08-candace-owens-said-charlie-kirk-returned.md">Candace Owens said Charlie Kirk returned from Korea and Tokyo via California late September 7 or early September 8 and continued to Arizona.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-08: Candace Owens said Charlie Kirk returned from Korea and Tokyo via California late September 7 or early September 8 and continued to Arizona. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:29:18](/episodes/ep-QRS_hR7NXaQ.md#t-00-29-18)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-08-candace-owens-said-charlie-kirk-took-lor">
<div class="timeline-date">2025-09-08</div>
<div class="timeline-desc"><a href="/events/event-2025-09-08-candace-owens-said-charlie-kirk-took-lor.md">Candace Owens said Charlie Kirk took Lori Frantzve to a clinic for Lyme disease treatment.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-08: Candace Owens said Charlie Kirk took Lori Frantzve to a clinic for Lyme disease treatment. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:28:23](/episodes/ep-QRS_hR7NXaQ.md#t-00-27-58)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-08-erika-kirk-posted-an-image-of-her-ill-mo">
<div class="timeline-date">2025-09-08</div>
<div class="timeline-desc"><a href="/events/event-2025-09-08-erika-kirk-posted-an-image-of-her-ill-mo.md">Erika Kirk posted an image of her ill mother and a ten-day countdown to September 16.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-08: Erika Kirk posted an image of her ill mother and a ten-day countdown to September 16. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:23:53](/episodes/ep-QRS_hR7NXaQ.md#t-00-23-23)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-04-charlie-kirk-attended-the-build-up-korea">
<div class="timeline-date">2025-09-04</div>
<div class="timeline-desc"><a href="/events/event-2025-09-04-charlie-kirk-attended-the-build-up-korea.md">Charlie Kirk attended the Build Up Korea conference shortly before Hyun-bo Son’s arrest.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-04: Charlie Kirk attended the Build Up Korea conference shortly before Hyun-bo Son’s arrest. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 01:08:48](/episodes/ep-wcD2khO3rOA.md#t-01-08-24)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-09-03-anthony-aguilar-was-arrested-after-inter">
<div class="timeline-date">2025-09-03</div>
<div class="timeline-desc"><a href="/events/event-2025-09-03-anthony-aguilar-was-arrested-after-inter.md">Anthony Aguilar was arrested after interrupting a congressional hearing to criticize AIPAC.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-09-03: Anthony Aguilar was arrested after interrupting a congressional hearing to criticize AIPAC. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:44:22](/episodes/ep-ZZGWo6oDscc.md#t-00-43-53)

</details>
</div>

**August**

<div class="timeline-event filter-item" id="event-2025-08-brooklyn-beckham-and-nicola-peltz-held-a">
<div class="timeline-date">2025-08</div>
<div class="timeline-desc"><a href="/events/event-2025-08-brooklyn-beckham-and-nicola-peltz-held-a.md">Brooklyn Beckham and Nicola Peltz held a second wedding without the Beckham family.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-08: Brooklyn Beckham and Nicola Peltz held a second wedding without the Beckham family. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [IN MY LAWSUIT ERA: Our First 'Cease And Desist'... @ 00:33:20](/episodes/ep-GY6GWceEqtQ.md#t-00-32-53)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-08-24-turning-point-usa-security-began-its-fir">
<div class="timeline-date">2025-08-24</div>
<div class="timeline-desc"><a href="/events/event-2025-08-24-turning-point-usa-security-began-its-fir.md">Turning Point USA security began its first formal information intake for Charlie Kirk’s Utah Valley University event.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-08-24: Turning Point USA security began its first formal information intake for Charlie Kirk’s Utah Valley University event. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 00:02:12](/episodes/ep-wcD2khO3rOA.md#t-00-02-07)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-08-15-a-turning-point-usa-donor-retreat-began-">
<div class="timeline-date">2025-08-15</div>
<div class="timeline-desc"><a href="/events/event-2025-08-15-a-turning-point-usa-donor-retreat-began-.md">A Turning Point USA donor retreat began in Aspen.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-08-15: A Turning Point USA donor retreat began in Aspen. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Baron Coleman LIVE!! | Candace Ep 293 @ 00:54:08](/episodes/ep-9naMwS0kMBE.md#t-00-54-01)

</details>
</div>

**July**

<div class="timeline-event filter-item" id="event-2025-07-candace-owens-said-erika-kirk-claimed-ch">
<div class="timeline-date">2025-07</div>
<div class="timeline-desc"><a href="/events/event-2025-07-candace-owens-said-erika-kirk-claimed-ch.md">Candace Owens said Erika Kirk claimed Charlie Kirk had finished his book about the Sabbath in July 2025.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-07: Candace Owens said Erika Kirk claimed Charlie Kirk had finished his book about the Sabbath in July 2025. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [REVELATIONS: Macron’s Boyfriend. Erika’s Girlfr... @ 00:25:46](/episodes/ep-DYD_QHMPwqM.md#t-00-25-24)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-07-11-tucker-carlson-spoke-at-turning-point-us">
<div class="timeline-date">2025-07-11</div>
<div class="timeline-desc"><a href="/events/event-2025-07-11-tucker-carlson-spoke-at-turning-point-us.md">Tucker Carlson spoke at Turning Point USA's Student Action Summit.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-07-11: Tucker Carlson spoke at Turning Point USA\'s Student Action Summit. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Myron Gaines x Candace Owens @ 00:57:10](/episodes/ep-2T39-oADLj0.md#t-00-56-52)
- [Erika’s Inquisition: TPUSA Employees FIRED For…... @ 00:01:58](/episodes/ep-gG4ZoYUjUc8.md#t-00-01-23)

</details>
</div>

**June**

<div class="timeline-event filter-item" id="event-2025-06-charlie-kirk-lobbied-president-trump-aga">
<div class="timeline-date">2025-06</div>
<div class="timeline-desc"><a href="/events/event-2025-06-charlie-kirk-lobbied-president-trump-aga.md">Charlie Kirk lobbied President Trump against expanded U.S. involvement in Israel's war with Iran.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-06: Charlie Kirk lobbied President Trump against expanded U.S. involvement in Israel\'s war with Iran. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:03:48](/episodes/ep-ZZGWo6oDscc.md#t-00-03-48)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-06-nelda-and-karl-buckman-donated-10-millio">
<div class="timeline-date">2025-06</div>
<div class="timeline-desc"><a href="/events/event-2025-06-nelda-and-karl-buckman-donated-10-millio.md">Nelda and Karl Buckman donated $10 million to Turning Point USA.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-06: Nelda and Karl Buckman donated $10 million to Turning Point USA. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [A Legal Turning Point? | Candace Ep 292 @ 00:12:34](/episodes/ep-NIEbqsLAK8g.md#t-00-11-56)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-06-21-the-united-states-carried-out-operation-">
<div class="timeline-date">2025-06-21</div>
<div class="timeline-desc"><a href="/events/event-2025-06-21-the-united-states-carried-out-operation-.md">The United States carried out Operation Midnight Hammer strikes on Iranian nuclear facilities.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-06-21: The United States carried out Operation Midnight Hammer strikes on Iranian nuclear facilities. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:12:06](/episodes/ep-ZZGWo6oDscc.md#t-00-11-44)
- [Myron Gaines x Candace Owens @ 00:46:10](/episodes/ep-2T39-oADLj0.md#t-00-46-00)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-06-19-erika-kirk-purged-posts-from-her-instagr">
<div class="timeline-date">2025-06-19</div>
<div class="timeline-desc"><a href="/events/event-2025-06-19-erika-kirk-purged-posts-from-her-instagr.md">Erika Kirk purged posts from her Instagram account.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-06-19: Erika Kirk purged posts from her Instagram account. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:12:25](/episodes/ep-ZZGWo6oDscc.md#t-00-12-25)
- [Halftime Wars: TPUSA vs The NFL | Candace Ep 304 @ 00:28:30](/episodes/ep-4YgrOhhy708.md#t-00-28-07)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-06-18-candace-owens-said-charlie-kirk-argued-a">
<div class="timeline-date">2025-06-18</div>
<div class="timeline-desc"><a href="/events/event-2025-06-18-candace-owens-said-charlie-kirk-argued-a.md">Candace Owens said Charlie Kirk argued at the White House against expanded U.S. military action in Iran.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-06-18: Candace Owens said Charlie Kirk argued at the White House against expanded U.S. military action in Iran. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Halftime Wars: TPUSA vs The NFL | Candace Ep 304 @ 00:29:28](/episodes/ep-4YgrOhhy708.md#t-00-29-28)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-06-13-the-12-day-war-between-israel-and-iran-c">
<div class="timeline-date">2025-06-13</div>
<div class="timeline-desc"><a href="/events/event-2025-06-13-the-12-day-war-between-israel-and-iran-c.md">The 12-day war between Israel and Iran commenced.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-06-13: The 12-day war between Israel and Iran commenced. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:11:31](/episodes/ep-ZZGWo6oDscc.md#t-00-10-59)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-06-02-the-su-btu-plane-departed-provo">
<div class="timeline-date">2025-06-02</div>
<div class="timeline-desc"><a href="/events/event-2025-06-02-the-su-btu-plane-departed-provo.md">The SU-BTU plane departed Provo.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-06-02: The SU-BTU plane departed Provo. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:11:01](/episodes/ep-ZZGWo6oDscc.md#t-00-10-59)

</details>
</div>

**May**

<div class="timeline-event filter-item" id="event-2025-05-candace-owens-said-erika-kirk-described-">
<div class="timeline-date">2025-05</div>
<div class="timeline-desc"><a href="/events/event-2025-05-candace-owens-said-erika-kirk-described-.md">Candace Owens said Erika Kirk described a letter Charlie Kirk wrote Benjamin Netanyahu in May 2025.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-05: Candace Owens said Erika Kirk described a letter Charlie Kirk wrote Benjamin Netanyahu in May 2025. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Loose Lips Sink Ships: ANOTHER Zoom Call Leaks…... @ 00:04:29](/episodes/ep-QdM9jLwjwLw.md#t-00-04-19)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-05-27-a-follow-up-su-btu-plane-came-in">
<div class="timeline-date">2025-05-27</div>
<div class="timeline-desc"><a href="/events/event-2025-05-27-a-follow-up-su-btu-plane-came-in.md">A follow-up SU-BTU plane came in.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-05-27: A follow-up SU-BTU plane came in. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:10:15](/episodes/ep-ZZGWo6oDscc.md#t-00-10-15)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-05-23-the-su-btu-anchor-plane-arrived-in-provo">
<div class="timeline-date">2025-05-23</div>
<div class="timeline-desc"><a href="/events/event-2025-05-23-the-su-btu-anchor-plane-arrived-in-provo.md">The SU-BTU anchor plane arrived in Provo.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-05-23: The SU-BTU anchor plane arrived in Provo. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:09:57](/episodes/ep-ZZGWo6oDscc.md#t-00-09-30)

</details>
</div>

**April**

<div class="timeline-event filter-item" id="event-2025-04-courage-house-nevada-purchased-a-40-acre">
<div class="timeline-date">2025-04</div>
<div class="timeline-desc"><a href="/events/event-2025-04-courage-house-nevada-purchased-a-40-acre.md">Courage House Nevada purchased a 40-acre property in Washoe County in April 2025.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025-04: Courage House Nevada purchased a 40-acre property in Washoe County in April 2025. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [OH SNAP! We Were Right About Fort Huachuca. | C... @ 00:25:27](/episodes/ep-X92MllIHDzw.md#t-00-25-17)

</details>
</div>

****

<div class="timeline-event filter-item" id="event-2025-candace-owens-was-interviewed-by-myron-g">
<div class="timeline-date">2025</div>
<div class="timeline-desc"><a href="/events/event-2025-candace-owens-was-interviewed-by-myron-g.md">Candace Owens was interviewed by Myron Gaines.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025: Candace Owens was interviewed by Myron Gaines. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [A Legal Turning Point? | Candace Ep 292 @ 00:41:09](/episodes/ep-NIEbqsLAK8g.md#t-00-40-49)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-brooklyn-beckhams-brothers-blocked-him-o">
<div class="timeline-date">2025</div>
<div class="timeline-desc"><a href="/events/event-2025-brooklyn-beckhams-brothers-blocked-him-o.md">Brooklyn Beckham's brothers blocked him on social media.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025: Brooklyn Beckham\'s brothers blocked him on social media. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [IN MY LAWSUIT ERA: Our First 'Cease And Desist'... @ 00:40:38](/episodes/ep-GY6GWceEqtQ.md#t-00-40-11)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-charlie-kirk-worked-on-turning-point-usa">
<div class="timeline-date">2025</div>
<div class="timeline-desc"><a href="/events/event-2025-charlie-kirk-worked-on-turning-point-usa.md">Charlie Kirk worked on Turning Point USA's Vision 2030 in the weeks before September 10.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025: Charlie Kirk worked on Turning Point USA\'s Vision 2030 in the weeks before September 10. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [EXCLUSIVE: Leaked TPUSA Audio | Candace EP 296 @ 00:21:24](/episodes/ep-A39g5oqB_eM.md#t-00-21-11)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-candace-owens-said-benjamin-netanyahu-re">
<div class="timeline-date">2025</div>
<div class="timeline-desc"><a href="/events/event-2025-candace-owens-said-benjamin-netanyahu-re.md">Candace Owens said Benjamin Netanyahu reached out to appear on Charlie Kirk's podcast.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025: Candace Owens said Benjamin Netanyahu reached out to appear on Charlie Kirk\'s podcast. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Halftime Wars: TPUSA vs The NFL | Candace Ep 304 @ 00:39:25](/episodes/ep-4YgrOhhy708.md#t-00-39-25)

</details>
</div>

<div class="timeline-event filter-item" id="event-2025-charlie-kirk-convened-a-hamptons-retreat">
<div class="timeline-date">2025</div>
<div class="timeline-desc"><a href="/events/event-2025-charlie-kirk-convened-a-hamptons-retreat.md">Charlie Kirk convened a Hamptons retreat where attendees held a heated debate about Israel.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2025: Charlie Kirk convened a Hamptons retreat where attendees held a heated debate about Israel. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Halftime Wars: TPUSA vs The NFL | Candace Ep 304 @ 00:33:59](/episodes/ep-4YgrOhhy708.md#t-00-33-59)
- [Here’s Why It’s Time For The Police To Question... @ 00:14:44](/episodes/ep-ti5Fxrvegno.md#t-00-14-24)

</details>
</div>

</div>
</div>

<div class="tab-content tab-content-2024">

<div class="timeline-container">

<h2 id="year-2024">2024</h2>

**December**

<div class="timeline-event filter-item" id="event-2024-12-a-court-petition-challenged-alton-c-jenn">
<div class="timeline-date">2024-12</div>
<div class="timeline-desc"><a href="/events/event-2024-12-a-court-petition-challenged-alton-c-jenn.md">A court petition challenged Alton C. Jennings's last will, testament, and trust.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2024-12: A court petition challenged Alton C. Jennings\'s last will, testament, and trust. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:15:42](/episodes/ep-ZZGWo6oDscc.md#t-00-15-13)
- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:14:58](/episodes/ep-ZZGWo6oDscc.md#t-00-14-32)

</details>
</div>

<div class="timeline-event filter-item" id="event-2024-12-taylor-swift-texted-blake-lively-about-a">
<div class="timeline-date">2024-12</div>
<div class="timeline-desc"><a href="/events/event-2024-12-taylor-swift-texted-blake-lively-about-a.md">Taylor Swift texted Blake Lively about an upcoming New York Times article.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2024-12: Taylor Swift texted Blake Lively about an upcoming New York Times article. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [IN MY LAWSUIT ERA: Our First 'Cease And Desist'... @ 00:29:17](/episodes/ep-GY6GWceEqtQ.md#t-00-28-53)

</details>
</div>

<div class="timeline-event filter-item" id="event-2024-12-12-new-zealand-associate-immigration-minist">
<div class="timeline-date">2024-12-12</div>
<div class="timeline-desc"><a href="/events/event-2024-12-12-new-zealand-associate-immigration-minist.md">New Zealand Associate Immigration Minister Chris Penk reversed Candace Owens's visa refusal.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2024-12-12: New Zealand Associate Immigration Minister Chris Penk reversed Candace Owens\'s visa refusal. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Myron Gaines x Candace Owens @ 00:39:54](/episodes/ep-2T39-oADLj0.md#t-00-39-37)

</details>
</div>

<div class="timeline-event filter-item" id="event-2024-12-08-bashar-al-assads-government-was-ousted-i">
<div class="timeline-date">2024-12-08</div>
<div class="timeline-desc"><a href="/events/event-2024-12-08-bashar-al-assads-government-was-ousted-i.md">Bashar al-Assad's government was ousted in Syria.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2024-12-08: Bashar al-Assad\'s government was ousted in Syria. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [You Won't Believe What Happened While We Were O... @ 01:03:45](/episodes/ep-OEAHy3SsIiI.md#t-01-03-08)

</details>
</div>

**November**

<div class="timeline-event filter-item" id="event-2024-11-dennis-prager-fell-and-was-seriously-inj">
<div class="timeline-date">2024-11</div>
<div class="timeline-desc"><a href="/events/event-2024-11-dennis-prager-fell-and-was-seriously-inj.md">Dennis Prager fell and was seriously injured after publishing an article criticizing Candace Owens.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2024-11: Dennis Prager fell and was seriously injured after publishing an article criticizing Candace Owens. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:09:30](/episodes/ep-CMcktj3Egfo.md#t-00-09-30)

</details>
</div>

<div class="timeline-event filter-item" id="event-2024-11-28-new-zealand-refused-candace-owens-an-ent">
<div class="timeline-date">2024-11-28</div>
<div class="timeline-desc"><a href="/events/event-2024-11-28-new-zealand-refused-candace-owens-an-ent.md">New Zealand refused Candace Owens an entertainer work visa.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2024-11-28: New Zealand refused Candace Owens an entertainer work visa. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Myron Gaines x Candace Owens @ 00:39:40](/episodes/ep-2T39-oADLj0.md#t-00-39-37)

</details>
</div>

<div class="timeline-event filter-item" id="event-2024-11-25-bassem-youssef-was-nominated-for-stopant">
<div class="timeline-date">2024-11-25</div>
<div class="timeline-desc"><a href="/events/event-2024-11-25-bassem-youssef-was-nominated-for-stopant.md">Bassem Youssef was nominated for StopAntisemitism's 2024 Antisemite of the Year title.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2024-11-25: Bassem Youssef was nominated for StopAntisemitism\'s 2024 Antisemite of the Year title. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Bassem Youssef | Candace Ep 298 @ 00:00:13](/episodes/ep-xjzb_t5Tk9o.md#t-00-00-01)

</details>
</div>

**October**

<div class="timeline-event filter-item" id="event-2024-10-27-australia-refused-candace-owens-a-visa-f">
<div class="timeline-date">2024-10-27</div>
<div class="timeline-desc"><a href="/events/event-2024-10-27-australia-refused-candace-owens-a-visa-f.md">Australia refused Candace Owens a visa for a speaking tour.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2024-10-27: Australia refused Candace Owens a visa for a speaking tour. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Myron Gaines x Candace Owens @ 00:39:42](/episodes/ep-2T39-oADLj0.md#t-00-39-37)

</details>
</div>

**September**

<div class="timeline-event filter-item" id="event-2024-09-10-candace-owens-said-a-murder-plot-targeti">
<div class="timeline-date">2024-09-10</div>
<div class="timeline-desc"><a href="/events/event-2024-09-10-candace-owens-said-a-murder-plot-targeti.md">Candace Owens said a murder plot targeting her was discovered and that the related case remained in court.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2024-09-10: Candace Owens said a murder plot targeting her was discovered and that the related case remained in court. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:35:58](/episodes/ep-CMcktj3Egfo.md#t-00-35-55)

</details>
</div>

**March**

<div class="timeline-event filter-item" id="event-2024-03-22-candace-owens-and-the-daily-wire-ended-t">
<div class="timeline-date">2024-03-22</div>
<div class="timeline-desc"><a href="/events/event-2024-03-22-candace-owens-and-the-daily-wire-ended-t.md">Candace Owens and The Daily Wire ended their relationship.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2024-03-22: Candace Owens and The Daily Wire ended their relationship. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Myron Gaines x Candace Owens @ 00:27:51](/episodes/ep-2T39-oADLj0.md#t-00-27-50)
- [Loose Lips Sink Ships: ANOTHER Zoom Call Leaks…... @ 00:43:16](/episodes/ep-QdM9jLwjwLw.md#t-00-43-16)

</details>
</div>

****

<div class="timeline-event filter-item" id="event-2024-austin-smith-dropped-his-arizona-house-r">
<div class="timeline-date">2024</div>
<div class="timeline-desc"><a href="/events/event-2024-austin-smith-dropped-his-arizona-house-r.md">Austin Smith dropped his Arizona House reelection bid after questions arose about signatures on his nomination petition.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2024: Austin Smith dropped his Arizona House reelection bid after questions arose about signatures on his nomination petition. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:49:33](/episodes/ep-zSKrxIUMNqw.md#t-00-48-53)

</details>
</div>

<div class="timeline-event filter-item" id="event-2024-candace-owens-said-platform-restrictions">
<div class="timeline-date">2024</div>
<div class="timeline-desc"><a href="/events/event-2024-candace-owens-said-platform-restrictions.md">Candace Owens said platform restrictions forced her to build her website in 2024.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2024: Candace Owens said platform restrictions forced her to build her website in 2024. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [PROJECT LOOKING GLASS: How Did Charlie Know He ... @ 00:50:38](/episodes/ep-BKcOm32ZEGk.md#t-00-50-21)
- [Myron Gaines x Candace Owens @ 00:40:30](/episodes/ep-2T39-oADLj0.md#t-00-40-23)

</details>
</div>

<div class="timeline-event filter-item" id="event-2024-the-documentary-identity-crisis-was-anno">
<div class="timeline-date">2024</div>
<div class="timeline-desc"><a href="/events/event-2024-the-documentary-identity-crisis-was-anno.md">The documentary Identity Crisis was announced in 2024.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2024: The documentary Identity Crisis was announced in 2024. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [OH SNAP! We Were Right About Fort Huachuca. | C... @ 00:21:47](/episodes/ep-X92MllIHDzw.md#t-00-21-25)

</details>
</div>

</div>
</div>

<div class="tab-content tab-content-historical">

<div class="year-jump">
<span class="year-jump-label">Jump to:</span>
<a href="#year-1769">1769</a>
<a href="#year-1854">1854</a>
<a href="#year-1946">1946</a>
<a href="#year-1948">1948</a>
<a href="#year-1954">1954</a>
<a href="#year-1955">1955</a>
<a href="#year-1963">1963</a>
<a href="#year-1964">1964</a>
<a href="#year-1968">1968</a>
<a href="#year-1969">1969</a>
<a href="#year-1970">1970</a>
<a href="#year-1971">1971</a>
<a href="#year-1974">1974</a>
<a href="#year-1975">1975</a>
<a href="#year-1978">1978</a>
<a href="#year-1979">1979</a>
<a href="#year-1980">1980</a>
<a href="#year-1981">1981</a>
<a href="#year-1982">1982</a>
<a href="#year-1985">1985</a>
<a href="#year-1986">1986</a>
<a href="#year-1987">1987</a>
<a href="#year-1990">1990</a>
<a href="#year-1994">1994</a>
<a href="#year-1995">1995</a>
<a href="#year-1997">1997</a>
<a href="#year-1998">1998</a>
<a href="#year-1999">1999</a>
<a href="#year-2001">2001</a>
<a href="#year-2002">2002</a>
<a href="#year-2003">2003</a>
<a href="#year-2005">2005</a>
<a href="#year-2006">2006</a>
<a href="#year-2009">2009</a>
<a href="#year-2010">2010</a>
<a href="#year-2011">2011</a>
<a href="#year-2012">2012</a>
<a href="#year-2013">2013</a>
<a href="#year-2014">2014</a>
<a href="#year-2015">2015</a>
<a href="#year-2016">2016</a>
<a href="#year-2017">2017</a>
<a href="#year-2018">2018</a>
<a href="#year-2019">2019</a>
<a href="#year-2020">2020</a>
<a href="#year-2021">2021</a>
<a href="#year-2022">2022</a>
<a href="#year-2023">2023</a>
<a href="#year-2026">2026</a>
</div>

<div class="timeline-container">

<h2 id="year-1769">1769</h2>

**January**

<div class="timeline-event filter-item" id="event-1769-01-01-joseph-priestleys-world-history-chart-ga">
<div class="timeline-date">1769-01-01</div>
<div class="timeline-desc"><a href="/events/event-1769-01-01-joseph-priestleys-world-history-chart-ga.md">Joseph Priestley's world history chart gave eighteenth-century viewers a new way to see global powers across time and space.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1769-01-01: Joseph Priestley\'s world history chart gave eighteenth-century viewers a new way to see global powers across time and space. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Judy Fan - DISI 2021 - Cognitive Technologies f... @ 00:00:05](/episodes/ep-yt-koVDYXSIfYo.md#t-00-00-00)

</details>
</div>


<h2 id="year-1854">1854</h2>

**January**

<div class="timeline-event filter-item" id="event-1854-01-01-john-snow-hand-drew-his-cholera-dot-map-">
<div class="timeline-date">1854-01-01</div>
<div class="timeline-desc"><a href="/events/event-1854-01-01-john-snow-hand-drew-his-cholera-dot-map-.md">John Snow hand-drew his cholera dot map of London in 1854.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1854-01-01: John Snow hand-drew his cholera dot map of London in 1854. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Judy Fan - DISI 2021 - Cognitive Technologies f... @ 00:00:04](/episodes/ep-yt-koVDYXSIfYo.md#t-00-00-00)

</details>
</div>


<h2 id="year-1946">1946</h2>

**July**

<div class="timeline-event filter-item" id="event-1946-07-22-the-king-david-hotel-in-jerusalem-was-bo">
<div class="timeline-date">1946-07-22</div>
<div class="timeline-desc"><a href="/events/event-1946-07-22-the-king-david-hotel-in-jerusalem-was-bo.md">The King David Hotel in Jerusalem was bombed.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1946-07-22: The King David Hotel in Jerusalem was bombed. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Bassem Youssef | Candace Ep 298 @ 00:13:03](/episodes/ep-xjzb_t5Tk9o.md#t-00-12-25)

</details>
</div>


<h2 id="year-1948">1948</h2>

<div class="timeline-event filter-item" id="event-1948-utah-adopted-the-beehive-as-a-state-symb">
<div class="timeline-date">1948</div>
<div class="timeline-desc"><a href="/events/event-1948-utah-adopted-the-beehive-as-a-state-symb.md">Utah adopted the beehive as a state symbol.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1948: Utah adopted the beehive as a state symbol. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:46:48](/episodes/ep-HYn0P-P1wUw.md#t-00-46-17)

</details>
</div>

<div class="timeline-event filter-item" id="event-1948-after-carey-hezekiah-falwell-died-jerry-">
<div class="timeline-date">1948</div>
<div class="timeline-desc"><a href="/events/event-1948-after-carey-hezekiah-falwell-died-jerry-.md">After Carey Hezekiah Falwell died, Jerry Falwell Sr. converted to Christianity and later became a televangelist.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1948: After Carey Hezekiah Falwell died, Jerry Falwell Sr. converted to Christianity and later became a televangelist. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 00:46:25](/episodes/ep-wcD2khO3rOA.md#t-00-46-10)

</details>
</div>


<h2 id="year-1954">1954</h2>

<div class="timeline-event filter-item" id="event-1954-cern-was-established-to-research-particl">
<div class="timeline-date">1954</div>
<div class="timeline-desc"><a href="/events/event-1954-cern-was-established-to-research-particl.md">CERN was established to research particle physics in 1954.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1954: CERN was established to research particle physics in 1954. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [PROJECT LOOKING GLASS: How Did Charlie Know He ... @ 00:33:10](/episodes/ep-BKcOm32ZEGk.md#t-00-33-05)

</details>
</div>

<div class="timeline-event filter-item" id="event-1954-the-lavon-affair-covert-bombing-operatio">
<div class="timeline-date">1954</div>
<div class="timeline-desc"><a href="/events/event-1954-the-lavon-affair-covert-bombing-operatio.md">The Lavon Affair covert bombing operation took place in Egypt.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1954: The Lavon Affair covert bombing operation took place in Egypt. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Bassem Youssef | Candace Ep 298 @ 00:14:27](/episodes/ep-xjzb_t5Tk9o.md#t-00-14-12)

</details>
</div>


<h2 id="year-1955">1955</h2>

**January**

<div class="timeline-event filter-item" id="event-1955-01-01-crockett-johnson-published-harold-and-th">
<div class="timeline-date">1955-01-01</div>
<div class="timeline-desc"><a href="/events/event-1955-01-01-crockett-johnson-published-harold-and-th.md">Crockett Johnson published Harold and the Purple Crayon in 1955.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1955-01-01: Crockett Johnson published Harold and the Purple Crayon in 1955. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Judy Fan - DISI 2021 - Cognitive Technologies f... @ 00:00:00](/episodes/ep-yt-koVDYXSIfYo.md#t-00-00-00)

</details>
</div>


<h2 id="year-1963">1963</h2>

**November**

<div class="timeline-event filter-item" id="event-1963-11-22-president-john-f-kennedy-was-assassinate">
<div class="timeline-date">1963-11-22</div>
<div class="timeline-desc"><a href="/events/event-1963-11-22-president-john-f-kennedy-was-assassinate.md">President John F. Kennedy was assassinated in Dallas.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">3× in 3 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1963-11-22: President John F. Kennedy was assassinated in Dallas. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Myron Gaines x Candace Owens @ 00:53:24](/episodes/ep-2T39-oADLj0.md#t-00-53-21)
- [Candace x Baron Coleman LIVE!! | Candace Ep 293 @ 00:47:30](/episodes/ep-9naMwS0kMBE.md#t-00-47-30)
- [EXCLUSIVE: Leaked TPUSA Audio | Candace EP 296 @ 00:43:34](/episodes/ep-A39g5oqB_eM.md#t-00-43-34)

</details>
</div>


<h2 id="year-1964">1964</h2>

<div class="timeline-event filter-item" id="event-1964-scientists-theorized-the-higgs-boson-in-">
<div class="timeline-date">1964</div>
<div class="timeline-desc"><a href="/events/event-1964-scientists-theorized-the-higgs-boson-in-.md">Scientists theorized the Higgs boson in 1964.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1964: Scientists theorized the Higgs boson in 1964. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [PROJECT LOOKING GLASS: How Did Charlie Know He ... @ 00:33:42](/episodes/ep-BKcOm32ZEGk.md#t-00-33-05)

</details>
</div>


<h2 id="year-1968">1968</h2>

<div class="timeline-event filter-item" id="event-1968-bobby-harpole-began-his-law-enforcement-">
<div class="timeline-date">1968</div>
<div class="timeline-desc"><a href="/events/event-1968-bobby-harpole-began-his-law-enforcement-.md">Bobby Harpole began his law enforcement career with the Texas Department of Public Safety.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1968: Bobby Harpole began his law enforcement career with the Texas Department of Public Safety. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [A Legal Turning Point? | Candace Ep 292 @ 00:14:41](/episodes/ep-NIEbqsLAK8g.md#t-00-14-04)

</details>
</div>


<h2 id="year-1969">1969</h2>

<div class="timeline-event filter-item" id="event-1969-michael-aquino-joined-the-church-of-sata">
<div class="timeline-date">1969</div>
<div class="timeline-desc"><a href="/events/event-1969-michael-aquino-joined-the-church-of-sata.md">Michael Aquino joined the Church of Satan.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1969: Michael Aquino joined the Church of Satan. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:22:19](/episodes/ep-ZZGWo6oDscc.md#t-00-22-07)

</details>
</div>


<h2 id="year-1970">1970</h2>

<div class="timeline-event filter-item" id="event-1970-william-stevenson-and-jill-biden-were-ma">
<div class="timeline-date">1970</div>
<div class="timeline-desc"><a href="/events/event-1970-william-stevenson-and-jill-biden-were-ma.md">William Stevenson and Jill Biden were married from 1970 to 1975.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1970: William Stevenson and Jill Biden were married from 1970 to 1975. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:48:23](/episodes/ep-QRS_hR7NXaQ.md#t-00-48-23)

</details>
</div>


<h2 id="year-1971">1971</h2>

<div class="timeline-event filter-item" id="event-1971-jerry-falwell-sr-established-lynchburg-c">
<div class="timeline-date">1971</div>
<div class="timeline-desc"><a href="/events/event-1971-jerry-falwell-sr-established-lynchburg-c.md">Jerry Falwell Sr. established Lynchburg College, which later became Liberty University.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1971: Jerry Falwell Sr. established Lynchburg College, which later became Liberty University. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 00:46:51](/episodes/ep-wcD2khO3rOA.md#t-00-46-10)
- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:23:42](/episodes/ep-CMcktj3Egfo.md#t-00-23-16)

</details>
</div>


<h2 id="year-1974">1974</h2>

<div class="timeline-event filter-item" id="event-1974-the-cattle-barons-ball-was-founded-in-da">
<div class="timeline-date">1974</div>
<div class="timeline-desc"><a href="/events/event-1974-the-cattle-barons-ball-was-founded-in-da.md">The Cattle Baron's Ball was founded in Dallas, Texas, to raise funds for cancer research.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1974: The Cattle Baron\'s Ball was founded in Dallas, Texas, to raise funds for cancer research. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [A Legal Turning Point? | Candace Ep 292 @ 00:04:37](/episodes/ep-NIEbqsLAK8g.md#t-00-04-16)

</details>
</div>


<h2 id="year-1975">1975</h2>

<div class="timeline-event filter-item" id="event-1975-michael-aquino-left-the-church-of-satan-">
<div class="timeline-date">1975</div>
<div class="timeline-desc"><a href="/events/event-1975-michael-aquino-left-the-church-of-satan-.md">Michael Aquino left the Church of Satan and formed the Temple of Set.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1975: Michael Aquino left the Church of Satan and formed the Temple of Set. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:22:43](/episodes/ep-ZZGWo6oDscc.md#t-00-22-07)

</details>
</div>


<h2 id="year-1978">1978</h2>

<div class="timeline-event filter-item" id="event-1978-a-congressional-investigation-concluded-">
<div class="timeline-date">1978</div>
<details><summary class="timeline-desc truncated"><a href="/events/event-1978-a-congressional-investigation-concluded-.md">A congressional investigation concluded that the Unification Church and other Sun Myung Moon organizations functioned as one international organiza...</a></summary>
<p class="timeline-desc"><a href="/events/event-1978-a-congressional-investigation-concluded-.md">A congressional investigation concluded that the Unification Church and other Sun Myung Moon organizations functioned as one international organization moving money among entities.</a></p>
</details>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1978: A congressional investigation concluded that the Unification Church and other Sun Myung Moon organizations functioned as one international organization moving money among entities. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 01:02:19](/episodes/ep-wcD2khO3rOA.md#t-01-01-57)

</details>
</div>


<h2 id="year-1979">1979</h2>

<div class="timeline-event filter-item" id="event-1979-israeli-prime-minister-menachem-begin-ga">
<div class="timeline-date">1979</div>
<div class="timeline-desc"><a href="/events/event-1979-israeli-prime-minister-menachem-begin-ga.md">Israeli prime minister Menachem Begin gave Jerry Falwell Sr. a Learjet.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1979: Israeli prime minister Menachem Begin gave Jerry Falwell Sr. a Learjet. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 00:47:09](/episodes/ep-wcD2khO3rOA.md#t-00-46-51)

</details>
</div>


<h2 id="year-1980">1980</h2>

<div class="timeline-event filter-item" id="event-1980-paul-e-vallely-and-michael-aquino-co-aut">
<div class="timeline-date">1980</div>
<div class="timeline-desc"><a href="/events/event-1980-paul-e-vallely-and-michael-aquino-co-aut.md">Paul E. Vallely and Michael Aquino co-authored MindWar.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1980: Paul E. Vallely and Michael Aquino co-authored MindWar. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:21:17](/episodes/ep-ZZGWo6oDscc.md#t-00-20-56)

</details>
</div>


<h2 id="year-1981">1981</h2>

<div class="timeline-event filter-item" id="event-1981-the-fbi-agents-association-was-founded">
<div class="timeline-date">1981</div>
<div class="timeline-desc"><a href="/events/event-1981-the-fbi-agents-association-was-founded.md">The FBI Agents Association was founded.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1981: The FBI Agents Association was founded. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [A Legal Turning Point? | Candace Ep 292 @ 00:09:28](/episodes/ep-NIEbqsLAK8g.md#t-00-09-03)

</details>
</div>


<h2 id="year-1982">1982</h2>

<div class="timeline-event filter-item" id="event-1982-creative-childrens-academy-opened-for-ac">
<div class="timeline-date">1982</div>
<div class="timeline-desc"><a href="/events/event-1982-creative-childrens-academy-opened-for-ac.md">Creative Children's Academy opened for academically gifted children.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1982: Creative Children\'s Academy opened for academically gifted children. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [EXCLUSIVE: Leaked TPUSA Audio | Candace EP 296 @ 00:29:34](/episodes/ep-A39g5oqB_eM.md#t-00-29-23)

</details>
</div>


<h2 id="year-1985">1985</h2>

**October**

<div class="timeline-event filter-item" id="event-1985-10-a-times-union-article-reported-on-the-sa">
<div class="timeline-date">1985-10</div>
<div class="timeline-desc"><a href="/events/event-1985-10-a-times-union-article-reported-on-the-sa.md">A Times Union article reported on the Sanctuary Movement trial in Tucson.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1985-10: A Times Union article reported on the Sanctuary Movement trial in Tucson. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Halftime Wars: TPUSA vs The NFL | Candace Ep 304 @ 00:22:27](/episodes/ep-4YgrOhhy708.md#t-00-22-10)

</details>
</div>


<h2 id="year-1986">1986</h2>

<div class="timeline-event filter-item" id="event-1986-san-francisco-police-began-investigating">
<div class="timeline-date">1986</div>
<div class="timeline-desc"><a href="/events/event-1986-san-francisco-police-began-investigating.md">San Francisco police began investigating sexual-abuse allegations connected to the Army Child Development Center.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1986: San Francisco police began investigating sexual-abuse allegations connected to the Army Child Development Center. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:27:54](/episodes/ep-ZZGWo6oDscc.md#t-00-27-22)

</details>
</div>


<h2 id="year-1987">1987</h2>

<div class="timeline-event filter-item" id="event-1987-a-girl-identified-michael-aquino-as-the-">
<div class="timeline-date">1987</div>
<div class="timeline-desc"><a href="/events/event-1987-a-girl-identified-michael-aquino-as-the-.md">A girl identified Michael Aquino as the alleged culprit in the Army Child Development Center investigation.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1987: A girl identified Michael Aquino as the alleged culprit in the Army Child Development Center investigation. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:28:05](/episodes/ep-ZZGWo6oDscc.md#t-00-28-05)

</details>
</div>


<h2 id="year-1990">1990</h2>

**April**

<div class="timeline-event filter-item" id="event-1990-04-29-arizona-chinese-news-was-founded-in-phoe">
<div class="timeline-date">1990-04-29</div>
<div class="timeline-desc"><a href="/events/event-1990-04-29-arizona-chinese-news-was-founded-in-phoe.md">Arizona Chinese News was founded in Phoenix.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1990-04-29: Arizona Chinese News was founded in Phoenix. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Erika’s Inquisition: TPUSA Employees FIRED For…... @ 00:17:39](/episodes/ep-gG4ZoYUjUc8.md#t-00-17-02)

</details>
</div>


<h2 id="year-1994">1994</h2>

<div class="timeline-event filter-item" id="event-1994-the-anonymous-survivor-entered-the-liber">
<div class="timeline-date">1994</div>
<div class="timeline-desc"><a href="/events/event-1994-the-anonymous-survivor-entered-the-liber.md">The anonymous survivor entered the Liberty Godparent Home while pregnant at approximately age 13 or 14.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1994: The anonymous survivor entered the Liberty Godparent Home while pregnant at approximately age 13 or 14. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 00:24:11](/episodes/ep-wcD2khO3rOA.md#t-00-23-37)

</details>
</div>

**July**

<div class="timeline-event filter-item" id="event-1994-07-26-a-car-bomb-exploded-outside-the-israeli-">
<div class="timeline-date">1994-07-26</div>
<div class="timeline-desc"><a href="/events/event-1994-07-26-a-car-bomb-exploded-outside-the-israeli-.md">A car bomb exploded outside the Israeli embassy in London.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1994-07-26: A car bomb exploded outside the Israeli embassy in London. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Bassem Youssef | Candace Ep 298 @ 00:15:00](/episodes/ep-xjzb_t5Tk9o.md#t-00-15-00)

</details>
</div>


<h2 id="year-1995">1995</h2>

<div class="timeline-event filter-item" id="event-1995-the-womens-federation-for-world-peace-gr">
<div class="timeline-date">1995</div>
<div class="timeline-desc"><a href="/events/event-1995-the-womens-federation-for-world-peace-gr.md">The Women’s Federation for World Peace granted $3.5 million to the Christian Heritage Foundation, which bought part of Liberty University’s debt.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1995: The Women’s Federation for World Peace granted $3.5 million to the Christian Heritage Foundation, which bought part of Liberty University’s debt. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 01:06:06](/episodes/ep-wcD2khO3rOA.md#t-01-05-32)

</details>
</div>


<h2 id="year-1997">1997</h2>

**November**

<div class="timeline-event filter-item" id="event-1997-11-23-the-washington-post-published-an-investi">
<div class="timeline-date">1997-11-23</div>
<div class="timeline-desc"><a href="/events/event-1997-11-23-the-washington-post-published-an-investi.md">The Washington Post published an investigation into Sun Myung Moon’s interlocking religious, business, media, and political network.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1997-11-23: The Washington Post published an investigation into Sun Myung Moon’s interlocking religious, business, media, and political network. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 00:50:50](/episodes/ep-wcD2khO3rOA.md#t-00-50-14)

</details>
</div>


<h2 id="year-1998">1998</h2>

<div class="timeline-event filter-item" id="event-1998-candace-owens-said-lyle-reams-was-indict">
<div class="timeline-date">1998</div>
<div class="timeline-desc"><a href="/events/event-1998-candace-owens-said-lyle-reams-was-indict.md">Candace Owens said Lyle Reams was indicted.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1998: Candace Owens said Lyle Reams was indicted. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Erika’s Inquisition: TPUSA Employees FIRED For…... @ 00:12:30](/episodes/ep-gG4ZoYUjUc8.md#t-00-12-06)

</details>
</div>


<h2 id="year-1999">1999</h2>

<div class="timeline-event filter-item" id="event-1999-global-concern-about-the-y2k-computer-pr">
<div class="timeline-date">1999</div>
<div class="timeline-desc"><a href="/events/event-1999-global-concern-about-the-y2k-computer-pr.md">Global concern about the Y2K computer problem intensified in the final months of 1999.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1999: Global concern about the Y2K computer problem intensified in the final months of 1999. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [PROJECT LOOKING GLASS: How Did Charlie Know He ... @ 00:08:05](/episodes/ep-BKcOm32ZEGk.md#t-00-08-03)

</details>
</div>

<div class="timeline-event filter-item" id="event-1999-the-matrix-was-released-in-1999">
<div class="timeline-date">1999</div>
<div class="timeline-desc"><a href="/events/event-1999-the-matrix-was-released-in-1999.md">The Matrix was released in 1999.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1999: The Matrix was released in 1999. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [PROJECT LOOKING GLASS: How Did Charlie Know He ... @ 00:18:00](/episodes/ep-BKcOm32ZEGk.md#t-00-17-32)

</details>
</div>

<div class="timeline-event filter-item" id="event-1999-candace-owens-said-lyle-reamss-case-was-">
<div class="timeline-date">1999</div>
<div class="timeline-desc"><a href="/events/event-1999-candace-owens-said-lyle-reamss-case-was-.md">Candace Owens said Lyle Reams's case was dismissed without prejudice.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1999: Candace Owens said Lyle Reams\'s case was dismissed without prejudice. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Erika’s Inquisition: TPUSA Employees FIRED For…... @ 00:12:55](/episodes/ep-gG4ZoYUjUc8.md#t-00-12-41)

</details>
</div>

<div class="timeline-event filter-item" id="event-1999-creative-childrens-academy-changed-its-n">
<div class="timeline-date">1999</div>
<div class="timeline-desc"><a href="/events/event-1999-creative-childrens-academy-changed-its-n.md">Creative Children's Academy changed its name to Quest Academy.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('1999: Creative Children\'s Academy changed its name to Quest Academy. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [EXCLUSIVE: Leaked TPUSA Audio | Candace EP 296 @ 00:29:40](/episodes/ep-A39g5oqB_eM.md#t-00-29-23)

</details>
</div>


<h2 id="year-2001">2001</h2>

<div class="timeline-event filter-item" id="event-2001-bassem-youssef-traveled-to-miami-before-">
<div class="timeline-date">2001</div>
<div class="timeline-desc"><a href="/events/event-2001-bassem-youssef-traveled-to-miami-before-.md">Bassem Youssef traveled to Miami before starting his medical residency.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2001: Bassem Youssef traveled to Miami before starting his medical residency. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Bassem Youssef | Candace Ep 298 @ 01:42:55](/episodes/ep-xjzb_t5Tk9o.md#t-01-42-45)

</details>
</div>

**September**

<div class="timeline-event filter-item" id="event-2001-09-11-hijacked-planes-struck-the-pentagon-and-">
<div class="timeline-date">2001-09-11</div>
<div class="timeline-desc"><a href="/events/event-2001-09-11-hijacked-planes-struck-the-pentagon-and-.md">Hijacked planes struck the Pentagon and Twin Towers in the September 11 attacks.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2001-09-11: Hijacked planes struck the Pentagon and Twin Towers in the September 11 attacks. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:02:47](/episodes/ep-QRS_hR7NXaQ.md#t-00-02-20)

</details>
</div>

<div class="timeline-event filter-item" id="event-2001-09-bassem-youssef-changed-his-return-flight">
<div class="timeline-date">2001-09</div>
<div class="timeline-desc"><a href="/events/event-2001-09-bassem-youssef-changed-his-return-flight.md">Bassem Youssef changed his return flight from Miami about a week before September 11.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2001-09: Bassem Youssef changed his return flight from Miami about a week before September 11. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Bassem Youssef | Candace Ep 298 @ 01:43:37](/episodes/ep-xjzb_t5Tk9o.md#t-01-43-23)

</details>
</div>

**October**

<div class="timeline-event filter-item" id="event-2001-10-10-two-armed-individuals-were-detained-insi">
<div class="timeline-date">2001-10-10</div>
<div class="timeline-desc"><a href="/events/event-2001-10-10-two-armed-individuals-were-detained-insi.md">Two armed individuals were detained inside Mexico's Chamber of Deputies building.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2001-10-10: Two armed individuals were detained inside Mexico\'s Chamber of Deputies building. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Bassem Youssef | Candace Ep 298 @ 00:15:00](/episodes/ep-xjzb_t5Tk9o.md#t-00-15-00)

</details>
</div>


<h2 id="year-2002">2002</h2>

<div class="timeline-event filter-item" id="event-2002-candace-owens-said-israel-took-over-tele">
<div class="timeline-date">2002</div>
<div class="timeline-desc"><a href="/events/event-2002-candace-owens-said-israel-took-over-tele.md">Candace Owens said Israel took over television broadcasts in Gaza and aired pornography as a spiritual weapon.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2002: Candace Owens said Israel took over television broadcasts in Gaza and aired pornography as a spiritual weapon. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Loose Lips Sink Ships: ANOTHER Zoom Call Leaks…... @ 01:06:04](/episodes/ep-QdM9jLwjwLw.md#t-01-05-39)

</details>
</div>

<div class="timeline-event filter-item" id="event-2002-candace-owens-said-german-geophysicists-">
<div class="timeline-date">2002</div>
<div class="timeline-desc"><a href="/events/event-2002-candace-owens-said-german-geophysicists-.md">Candace Owens said German geophysicists began trips to Iraq to map ancient Uruk and locate what they believed was Gilgamesh's tomb.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2002: Candace Owens said German geophysicists began trips to Iraq to map ancient Uruk and locate what they believed was Gilgamesh\'s tomb. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:07:46](/episodes/ep-QRS_hR7NXaQ.md#t-00-07-19)

</details>
</div>


<h2 id="year-2003">2003</h2>

<div class="timeline-event filter-item" id="event-2003-after-the-2003-invasion-of-iraq-us-marin">
<div class="timeline-date">2003</div>
<div class="timeline-desc"><a href="/events/event-2003-after-the-2003-invasion-of-iraq-us-marin.md">After the 2003 invasion of Iraq, U.S. Marines built a helicopter pad on the ruins of Babylon and used archaeological fragments in sandbags.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2003: After the 2003 invasion of Iraq, U.S. Marines built a helicopter pad on the ruins of Babylon and used archaeological fragments in sandbags. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:12:23](/episodes/ep-QRS_hR7NXaQ.md#t-00-12-15)

</details>
</div>

<div class="timeline-event filter-item" id="event-2003-rob-skiba-said-the-body-of-gilgamesh-was">
<div class="timeline-date">2003</div>
<div class="timeline-desc"><a href="/events/event-2003-rob-skiba-said-the-body-of-gilgamesh-was.md">Rob Skiba said the body of Gilgamesh was found in the Iraqi desert.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2003: Rob Skiba said the body of Gilgamesh was found in the Iraqi desert. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [REVELATIONS: Macron’s Boyfriend. Erika’s Girlfr... @ 00:14:29](/episodes/ep-DYD_QHMPwqM.md#t-00-14-29)

</details>
</div>

**February**

<div class="timeline-event filter-item" id="event-2003-02-05-colin-powell-told-the-united-nations-sec">
<div class="timeline-date">2003-02-05</div>
<div class="timeline-desc"><a href="/events/event-2003-02-05-colin-powell-told-the-united-nations-sec.md">Colin Powell told the United Nations Security Council that Iraq possessed weapons of mass destruction.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2003-02-05: Colin Powell told the United Nations Security Council that Iraq possessed weapons of mass destruction. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:08:46](/episodes/ep-QRS_hR7NXaQ.md#t-00-08-46)

</details>
</div>

**March**

<div class="timeline-event filter-item" id="event-2003-03-20-the-united-states-invaded-iraq">
<div class="timeline-date">2003-03-20</div>
<div class="timeline-desc"><a href="/events/event-2003-03-20-the-united-states-invaded-iraq.md">The United States invaded Iraq.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2003-03-20: The United States invaded Iraq. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:09:04](/episodes/ep-QRS_hR7NXaQ.md#t-00-08-46)
- [REVELATIONS: Macron’s Boyfriend. Erika’s Girlfr... @ 00:16:16](/episodes/ep-DYD_QHMPwqM.md#t-00-16-16)

</details>
</div>

**April**

<div class="timeline-event filter-item" id="event-2003-04-a-multinational-force-used-ancient-babyl">
<div class="timeline-date">2003-04</div>
<div class="timeline-desc"><a href="/events/event-2003-04-a-multinational-force-used-ancient-babyl.md">A multinational force used ancient Babylon as a military camp from April 2003 through December 2004.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2003-04: A multinational force used ancient Babylon as a military camp from April 2003 through December 2004. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:11:14](/episodes/ep-QRS_hR7NXaQ.md#t-00-10-58)

</details>
</div>


<h2 id="year-2005">2005</h2>

<div class="timeline-event filter-item" id="event-2005-the-british-museum-issued-a-report-about">
<div class="timeline-date">2005</div>
<div class="timeline-desc"><a href="/events/event-2005-the-british-museum-issued-a-report-about.md">The British Museum issued a report about coalition forces' use of ancient Babylon as a military camp.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2005: The British Museum issued a report about coalition forces\' use of ancient Babylon as a military camp. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:11:10](/episodes/ep-QRS_hR7NXaQ.md#t-00-10-58)

</details>
</div>

<div class="timeline-event filter-item" id="event-2005-candace-owens-said-23andme-came-together">
<div class="timeline-date">2005</div>
<div class="timeline-desc"><a href="/events/event-2005-candace-owens-said-23andme-came-together.md">Candace Owens said 23andMe came together in 2005 and began receiving consumer DNA kits.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2005: Candace Owens said 23andMe came together in 2005 and began receiving consumer DNA kits. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [REVELATIONS: Macron’s Boyfriend. Erika’s Girlfr... @ 00:02:58](/episodes/ep-DYD_QHMPwqM.md#t-00-02-15)

</details>
</div>

**March**

<div class="timeline-event filter-item" id="event-2005-03-30-israel-honored-participants-in-the-lavon">
<div class="timeline-date">2005-03-30</div>
<div class="timeline-desc"><a href="/events/event-2005-03-30-israel-honored-participants-in-the-lavon.md">Israel honored participants in the Lavon Affair.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2005-03-30: Israel honored participants in the Lavon Affair. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Bassem Youssef | Candace Ep 298 @ 00:14:48](/episodes/ep-xjzb_t5Tk9o.md#t-00-14-12)

</details>
</div>


<h2 id="year-2006">2006</h2>

<div class="timeline-event filter-item" id="event-2006-rob-mccoy-adopted-a-12-year-old-russian-">
<div class="timeline-date">2006</div>
<div class="timeline-desc"><a href="/events/event-2006-rob-mccoy-adopted-a-12-year-old-russian-.md">Rob McCoy adopted a 12-year-old Russian girl named Natalia, who later went by Natasha.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2006: Rob McCoy adopted a 12-year-old Russian girl named Natalia, who later went by Natasha. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 00:14:11](/episodes/ep-wcD2khO3rOA.md#t-00-14-11)

</details>
</div>

<div class="timeline-event filter-item" id="event-2006-peyton-mccormick-was-miss-teen-usa-in-20">
<div class="timeline-date">2006</div>
<div class="timeline-desc"><a href="/events/event-2006-peyton-mccormick-was-miss-teen-usa-in-20.md">Peyton McCormick was Miss Teen USA in 2006.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2006: Peyton McCormick was Miss Teen USA in 2006. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [OH SNAP! We Were Right About Fort Huachuca. | C... @ 00:05:54](/episodes/ep-X92MllIHDzw.md#t-00-05-32)

</details>
</div>

<div class="timeline-event filter-item" id="event-2006-a-commenter-alleged-that-mitch-snow-had-">
<div class="timeline-date">2006</div>
<div class="timeline-desc"><a href="/events/event-2006-a-commenter-alleged-that-mitch-snow-had-.md">A commenter alleged that Mitch Snow had abused women around 2006.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2006: A commenter alleged that Mitch Snow had abused women around 2006. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [A Legal Turning Point? | Candace Ep 292 @ 00:47:50](/episodes/ep-NIEbqsLAK8g.md#t-00-47-30)

</details>
</div>


<h2 id="year-2009">2009</h2>

<div class="timeline-event filter-item" id="event-2009-the-united-nations-published-an-article-">
<div class="timeline-date">2009</div>
<div class="timeline-desc"><a href="/events/event-2009-the-united-nations-published-an-article-.md">The United Nations published an article about damage to ancient Babylon from its use as a military camp.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2009: The United Nations published an article about damage to ancient Babylon from its use as a military camp. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:10:44](/episodes/ep-QRS_hR7NXaQ.md#t-00-10-14)

</details>
</div>


<h2 id="year-2010">2010</h2>

<div class="timeline-event filter-item" id="event-2010-fort-huachuca-affiliated-people-worked-w">
<div class="timeline-date">2010</div>
<div class="timeline-desc"><a href="/events/event-2010-fort-huachuca-affiliated-people-worked-w.md">Fort Huachuca-affiliated people worked with Erika Kirk on the unreleased mini-film November Renaissance from about 2010 to around 2013.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2010: Fort Huachuca-affiliated people worked with Erika Kirk on the unreleased mini-film November Renaissance from about 2010 to around 2013. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [OH SNAP! We Were Right About Fort Huachuca. | C... @ 00:04:15](/episodes/ep-X92MllIHDzw.md#t-00-04-15)

</details>
</div>

**August**

<div class="timeline-event filter-item" id="event-2010-08-07-a-contrarian-video-said-peggy-siegal-ask">
<div class="timeline-date">2010-08-07</div>
<div class="timeline-desc"><a href="/events/event-2010-08-07-a-contrarian-video-said-peggy-siegal-ask.md">A Contrarian video said Peggy Siegal asked Jeffrey Epstein whether an event would be 100% Jewish.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2010-08-07: A Contrarian video said Peggy Siegal asked Jeffrey Epstein whether an event would be 100% Jewish. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BAAL SO HARD: The Epstein Files | Candace Ep 300 @ 00:11:27](/episodes/ep-CEF7gQRWYCE.md#t-00-10-55)

</details>
</div>


<h2 id="year-2011">2011</h2>

<div class="timeline-event filter-item" id="event-2011-tyler-bowyer-traveled-to-romania-to-work">
<div class="timeline-date">2011</div>
<div class="timeline-desc"><a href="/events/event-2011-tyler-bowyer-traveled-to-romania-to-work.md">Tyler Bowyer traveled to Romania to work with the Romanian government.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2011: Tyler Bowyer traveled to Romania to work with the Romanian government. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 00:12:19](/episodes/ep-wcD2khO3rOA.md#t-00-12-10)

</details>
</div>

<div class="timeline-event filter-item" id="event-2011-otto-busher-iii-was-accused-of-running-a">
<div class="timeline-date">2011</div>
<div class="timeline-desc"><a href="/events/event-2011-otto-busher-iii-was-accused-of-running-a.md">Otto Busher III was accused of running a brothel involving Romanian children at a U.S. military base during the 2011–2015 period.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2011: Otto Busher III was accused of running a brothel involving Romanian children at a U.S. military base during the 2011–2015 period. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 00:14:55](/episodes/ep-wcD2khO3rOA.md#t-00-14-11)

</details>
</div>


<h2 id="year-2012">2012</h2>

<div class="timeline-event filter-item" id="event-2012-erika-kirk-began-the-romanian-angels-pro">
<div class="timeline-date">2012</div>
<div class="timeline-desc"><a href="/events/event-2012-erika-kirk-began-the-romanian-angels-pro.md">Erika Kirk began the Romanian Angels Project in late 2012 or early 2013, and it operated through 2015.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2012: Erika Kirk began the Romanian Angels Project in late 2012 or early 2013, and it operated through 2015. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 00:10:34](/episodes/ep-wcD2khO3rOA.md#t-00-10-04)

</details>
</div>

<div class="timeline-event filter-item" id="event-2012-candace-owens-said-alleged-outcome-predi">
<div class="timeline-date">2012</div>
<div class="timeline-desc"><a href="/events/event-2012-candace-owens-said-alleged-outcome-predi.md">Candace Owens said alleged outcome-prediction technology stopped working.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2012: Candace Owens said alleged outcome-prediction technology stopped working. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:52:00](/episodes/ep-ZZGWo6oDscc.md#t-00-51-34)

</details>
</div>

<div class="timeline-event filter-item" id="event-2012-whistleblowers-alleged-that-agencies-hel">
<div class="timeline-date">2012</div>
<div class="timeline-desc"><a href="/events/event-2012-whistleblowers-alleged-that-agencies-hel.md">Whistleblowers alleged that agencies held a confidential briefing about a convergence in human potential in 2012.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2012: Whistleblowers alleged that agencies held a confidential briefing about a convergence in human potential in 2012. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [PROJECT LOOKING GLASS: How Did Charlie Know He ... @ 00:19:11](/episodes/ep-BKcOm32ZEGk.md#t-00-18-58)

</details>
</div>

<div class="timeline-event filter-item" id="event-2012-cern-observed-a-reaction-consistent-with">
<div class="timeline-date">2012</div>
<div class="timeline-desc"><a href="/events/event-2012-cern-observed-a-reaction-consistent-with.md">CERN observed a reaction consistent with the Higgs boson in 2012.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2012: CERN observed a reaction consistent with the Higgs boson in 2012. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [PROJECT LOOKING GLASS: How Did Charlie Know He ... @ 00:33:47](/episodes/ep-BKcOm32ZEGk.md#t-00-33-47)

</details>
</div>

**February**

<div class="timeline-event filter-item" id="event-2012-02-andrew-breitbart-hired-28-year-old-ben-s">
<div class="timeline-date">2012-02</div>
<div class="timeline-desc"><a href="/events/event-2012-02-andrew-breitbart-hired-28-year-old-ben-s.md">Andrew Breitbart hired 28-year-old Ben Shapiro as a Breitbart editor-at-large roughly two weeks before Breitbart died.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2012-02: Andrew Breitbart hired 28-year-old Ben Shapiro as a Breitbart editor-at-large roughly two weeks before Breitbart died. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:21:30](/episodes/ep-zSKrxIUMNqw.md#t-00-20-51)

</details>
</div>

**March**

<div class="timeline-event filter-item" id="event-2012-03-01-andrew-breitbart-died-at-age-43-from-wha">
<div class="timeline-date">2012-03-01</div>
<div class="timeline-desc"><a href="/events/event-2012-03-01-andrew-breitbart-died-at-age-43-from-wha.md">Andrew Breitbart died at age 43 from what was reported as an apparent heart attack.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2012-03-01: Andrew Breitbart died at age 43 from what was reported as an apparent heart attack. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:19:36](/episodes/ep-zSKrxIUMNqw.md#t-00-19-28)

</details>
</div>

**May**

<div class="timeline-event filter-item" id="event-2012-05-bill-montgomery-met-charlie-kirk-after-k">
<div class="timeline-date">2012-05</div>
<div class="timeline-desc"><a href="/events/event-2012-05-bill-montgomery-met-charlie-kirk-after-k.md">Bill Montgomery met Charlie Kirk after Kirk spoke at Benedictine University's youth government day.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2012-05: Bill Montgomery met Charlie Kirk after Kirk spoke at Benedictine University\'s youth government day. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [EXCLUSIVE: Leaked TPUSA Audio | Candace EP 296 @ 00:28:23](/episodes/ep-A39g5oqB_eM.md#t-00-27-58)

</details>
</div>

**June**

<div class="timeline-event filter-item" id="event-2012-06-02-jessica-ghawi-escaped-a-mass-shooting-at">
<div class="timeline-date">2012-06-02</div>
<div class="timeline-desc"><a href="/events/event-2012-06-02-jessica-ghawi-escaped-a-mass-shooting-at.md">Jessica Ghawi escaped a mass shooting at a Toronto mall.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2012-06-02: Jessica Ghawi escaped a mass shooting at a Toronto mall. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Baron Coleman LIVE!! | Candace Ep 293 @ 00:12:13](/episodes/ep-9naMwS0kMBE.md#t-00-11-54)

</details>
</div>

<div class="timeline-event filter-item" id="event-2012-06-bill-montgomery-and-charlie-kirk-launche">
<div class="timeline-date">2012-06</div>
<div class="timeline-desc"><a href="/events/event-2012-06-bill-montgomery-and-charlie-kirk-launche.md">Bill Montgomery and Charlie Kirk launched Turning Point USA.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2012-06: Bill Montgomery and Charlie Kirk launched Turning Point USA. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [EXCLUSIVE: Leaked TPUSA Audio | Candace EP 296 @ 00:28:41](/episodes/ep-A39g5oqB_eM.md#t-00-27-58)

</details>
</div>

**July**

<div class="timeline-event filter-item" id="event-2012-07-20-jessica-ghawi-was-killed-in-the-aurora-t">
<div class="timeline-date">2012-07-20</div>
<div class="timeline-desc"><a href="/events/event-2012-07-20-jessica-ghawi-was-killed-in-the-aurora-t.md">Jessica Ghawi was killed in the Aurora theater mass shooting.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2012-07-20: Jessica Ghawi was killed in the Aurora theater mass shooting. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Baron Coleman LIVE!! | Candace Ep 293 @ 00:12:53](/episodes/ep-9naMwS0kMBE.md#t-00-12-25)

</details>
</div>


<h2 id="year-2013">2013</h2>

<div class="timeline-event filter-item" id="event-2013-arizona-house-judiciary-committee-chair-">
<div class="timeline-date">2013</div>
<div class="timeline-desc"><a href="/events/event-2013-arizona-house-judiciary-committee-chair-.md">Arizona House Judiciary Committee chair Eddie Farnsworth blocked a hearing on a bipartisan bill intended to prevent child sex trafficking.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2013: Arizona House Judiciary Committee chair Eddie Farnsworth blocked a hearing on a bipartisan bill intended to prevent child sex trafficking. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:34:03](/episodes/ep-HYn0P-P1wUw.md#t-00-33-47)

</details>
</div>

<div class="timeline-event filter-item" id="event-2013-tyler-bowyer-met-a-12-year-old-ukrainian">
<div class="timeline-date">2013</div>
<div class="timeline-desc"><a href="/events/event-2013-tyler-bowyer-met-a-12-year-old-ukrainian.md">Tyler Bowyer met a 12-year-old Ukrainian orphan named Natalia through an adoption-agency program.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2013: Tyler Bowyer met a 12-year-old Ukrainian orphan named Natalia through an adoption-agency program. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [The Past Is Prologue: Why Charlie Kirk Was Murd... @ 00:12:31](/episodes/ep-wcD2khO3rOA.md#t-00-12-10)

</details>
</div>


<h2 id="year-2014">2014</h2>

<div class="timeline-event filter-item" id="event-2014-arizona-senator-david-farnsworth-sponsor">
<div class="timeline-date">2014</div>
<details><summary class="timeline-desc truncated"><a href="/events/event-2014-arizona-senator-david-farnsworth-sponsor.md">Arizona senator David Farnsworth sponsored an electromagnetic-pulse bill and introduced GTEC Industries CEO Lori Frantzve to the House; Eddie Farns...</a></summary>
<p class="timeline-desc"><a href="/events/event-2014-arizona-senator-david-farnsworth-sponsor.md">Arizona senator David Farnsworth sponsored an electromagnetic-pulse bill and introduced GTEC Industries CEO Lori Frantzve to the House; Eddie Farnsworth voted on the bill.</a></p>
</details>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2014: Arizona senator David Farnsworth sponsored an electromagnetic-pulse bill and introduced GTEC Industries CEO Lori Frantzve to the House; Eddie Farnsworth voted on the bill. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:32:32](/episodes/ep-HYn0P-P1wUw.md#t-00-32-26)

</details>
</div>

<div class="timeline-event filter-item" id="event-2014-peter-thiel-said-reid-hoffman-and-silico">
<div class="timeline-date">2014</div>
<div class="timeline-desc"><a href="/events/event-2014-peter-thiel-said-reid-hoffman-and-silico.md">Peter Thiel said Reid Hoffman and Silicon Valley introduced him to Jeffrey Epstein in 2014.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2014: Peter Thiel said Reid Hoffman and Silicon Valley introduced him to Jeffrey Epstein in 2014. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BAAL SO HARD: The Epstein Files | Candace Ep 300 @ 00:26:35](/episodes/ep-CEF7gQRWYCE.md#t-00-26-35)

</details>
</div>

**October**

<div class="timeline-event filter-item" id="event-2014-10-ronald-s-godwin-retired-from-liberty-uni">
<div class="timeline-date">2014-10</div>
<div class="timeline-desc"><a href="/events/event-2014-10-ronald-s-godwin-retired-from-liberty-uni.md">Ronald S. Godwin retired from Liberty University, and Johnnie Moore left the university around the same time.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2014-10: Ronald S. Godwin retired from Liberty University, and Johnnie Moore left the university around the same time. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:26:21](/episodes/ep-CMcktj3Egfo.md#t-00-26-09)
- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:18:47](/episodes/ep-CMcktj3Egfo.md#t-00-18-28)

</details>
</div>


<h2 id="year-2015">2015</h2>

<div class="timeline-event filter-item" id="event-2015-ben-shapiro-and-associates-began-quietly">
<div class="timeline-date">2015</div>
<div class="timeline-desc"><a href="/events/event-2015-ben-shapiro-and-associates-began-quietly.md">Ben Shapiro and associates began quietly building The Daily Wire near the end of 2015.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2015: Ben Shapiro and associates began quietly building The Daily Wire near the end of 2015. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:27:30](/episodes/ep-zSKrxIUMNqw.md#t-00-26-53)

</details>
</div>

<div class="timeline-event filter-item" id="event-2015-johnnie-moore-went-to-hollywood-and-work">
<div class="timeline-date">2015</div>
<div class="timeline-desc"><a href="/events/event-2015-johnnie-moore-went-to-hollywood-and-work.md">Johnnie Moore went to Hollywood and worked with Mark Burnett after leaving Liberty University.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2015: Johnnie Moore went to Hollywood and worked with Mark Burnett after leaving Liberty University. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:19:27](/episodes/ep-CMcktj3Egfo.md#t-00-19-10)

</details>
</div>

**July**

<div class="timeline-event filter-item" id="event-2015-07-tyler-bowyer-hosted-donald-trumps-first-">
<div class="timeline-date">2015-07</div>
<div class="timeline-desc"><a href="/events/event-2015-07-tyler-bowyer-hosted-donald-trumps-first-.md">Tyler Bowyer hosted Donald Trump's first Arizona rally, where Erika Kirk stood behind Trump after offering to help.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2015-07: Tyler Bowyer hosted Donald Trump\'s first Arizona rally, where Erika Kirk stood behind Trump after offering to help. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:29:07](/episodes/ep-HYn0P-P1wUw.md#t-00-28-51)

</details>
</div>

**November**

<div class="timeline-event filter-item" id="event-2015-11-13-a-series-of-coordinated-attacks-struck-p">
<div class="timeline-date">2015-11-13</div>
<div class="timeline-desc"><a href="/events/event-2015-11-13-a-series-of-coordinated-attacks-struck-p.md">A series of coordinated attacks struck Paris and Saint-Denis.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2015-11-13: A series of coordinated attacks struck Paris and Saint-Denis. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Bassem Youssef | Candace Ep 298 @ 01:07:52](/episodes/ep-xjzb_t5Tk9o.md#t-01-07-52)

</details>
</div>


<h2 id="year-2016">2016</h2>

<div class="timeline-event filter-item" id="event-2016-michelle-fields-alleged-that-corey-lewan">
<div class="timeline-date">2016</div>
<div class="timeline-desc"><a href="/events/event-2016-michelle-fields-alleged-that-corey-lewan.md">Michelle Fields alleged that Corey Lewandowski assaulted her at an event and displayed bruises.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2016: Michelle Fields alleged that Corey Lewandowski assaulted her at an event and displayed bruises. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:22:37](/episodes/ep-zSKrxIUMNqw.md#t-00-22-03)

</details>
</div>

<div class="timeline-event filter-item" id="event-2016-a-staged-ritual-resembling-a-human-sacri">
<div class="timeline-date">2016</div>
<div class="timeline-desc"><a href="/events/event-2016-a-staged-ritual-resembling-a-human-sacri.md">A staged ritual resembling a human sacrifice was filmed on CERN grounds in 2016.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2016: A staged ritual resembling a human sacrifice was filmed on CERN grounds in 2016. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [PROJECT LOOKING GLASS: How Did Charlie Know He ... @ 00:35:48](/episodes/ep-BKcOm32ZEGk.md#t-00-35-19)

</details>
</div>

<div class="timeline-event filter-item" id="event-2016-candace-owens-said-hacked-dnc-emails-wer">
<div class="timeline-date">2016</div>
<div class="timeline-desc"><a href="/events/event-2016-candace-owens-said-hacked-dnc-emails-wer.md">Candace Owens said hacked DNC emails were published by WikiLeaks during the 2016 Pizzagate controversy.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2016: Candace Owens said hacked DNC emails were published by WikiLeaks during the 2016 Pizzagate controversy. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BAAL SO HARD: The Epstein Files | Candace Ep 300 @ 00:14:06](/episodes/ep-CEF7gQRWYCE.md#t-00-14-00)

</details>
</div>

**March**

<div class="timeline-event filter-item" id="event-2016-03-13-ben-shapiro-and-michelle-fields-announce">
<div class="timeline-date">2016-03-13</div>
<div class="timeline-desc"><a href="/events/event-2016-03-13-ben-shapiro-and-michelle-fields-announce.md">Ben Shapiro and Michelle Fields announced their resignations from Breitbart News.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2016-03-13: Ben Shapiro and Michelle Fields announced their resignations from Breitbart News. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:24:24](/episodes/ep-zSKrxIUMNqw.md#t-00-24-08)

</details>
</div>


<h2 id="year-2017">2017</h2>

<div class="timeline-event filter-item" id="event-2017-a-contrarian-video-said-jeffrey-epstein-">
<div class="timeline-date">2017</div>
<div class="timeline-desc"><a href="/events/event-2017-a-contrarian-video-said-jeffrey-epstein-.md">A Contrarian video said Jeffrey Epstein argued that employers should hire only people who could prove they were genetically Jewish.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2017: A Contrarian video said Jeffrey Epstein argued that employers should hire only people who could prove they were genetically Jewish. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BAAL SO HARD: The Epstein Files | Candace Ep 300 @ 00:11:52](/episodes/ep-CEF7gQRWYCE.md#t-00-11-40)

</details>
</div>

**December**

<div class="timeline-event filter-item" id="event-2017-12-06-candace-owens-said-arizona-received-dese">
<div class="timeline-date">2017-12-06</div>
<div class="timeline-desc"><a href="/events/event-2017-12-06-candace-owens-said-arizona-received-dese.md">Candace Owens said Arizona received Desert Spirit Tech's public-notice filing.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2017-12-06: Candace Owens said Arizona received Desert Spirit Tech\'s public-notice filing. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Erika’s Inquisition: TPUSA Employees FIRED For…... @ 00:16:47](/episodes/ep-gG4ZoYUjUc8.md#t-00-16-17)

</details>
</div>


<h2 id="year-2018">2018</h2>

<div class="timeline-event filter-item" id="event-2018-an-older-spiritual-adviser-told-charlie-">
<div class="timeline-date">2018</div>
<div class="timeline-desc"><a href="/events/event-2018-an-older-spiritual-adviser-told-charlie-.md">An older spiritual adviser told Charlie Kirk that Kirk would die and that his death would save humanity.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2018: An older spiritual adviser told Charlie Kirk that Kirk would die and that his death would save humanity. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:43:52](/episodes/ep-zSKrxIUMNqw.md#t-00-43-10)

</details>
</div>

<div class="timeline-event filter-item" id="event-2018-candace-owens-and-charlie-kirk-traveled-">
<div class="timeline-date">2018</div>
<div class="timeline-desc"><a href="/events/event-2018-candace-owens-and-charlie-kirk-traveled-.md">Candace Owens and Charlie Kirk traveled to Israel together.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2018: Candace Owens and Charlie Kirk traveled to Israel together. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:04:49](/episodes/ep-CMcktj3Egfo.md#t-00-04-12)

</details>
</div>

<div class="timeline-event filter-item" id="event-2018-bobby-harpole-gave-an-interview-while-ru">
<div class="timeline-date">2018</div>
<div class="timeline-desc"><a href="/events/event-2018-bobby-harpole-gave-an-interview-while-ru.md">Bobby Harpole gave an interview while running for Erath County sheriff.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2018: Bobby Harpole gave an interview while running for Erath County sheriff. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [A Legal Turning Point? | Candace Ep 292 @ 00:14:22](/episodes/ep-NIEbqsLAK8g.md#t-00-14-04)

</details>
</div>

<div class="timeline-event filter-item" id="event-2018-candace-owens-visited-peter-thiels-los-a">
<div class="timeline-date">2018</div>
<div class="timeline-desc"><a href="/events/event-2018-candace-owens-visited-peter-thiels-los-a.md">Candace Owens visited Peter Thiel's Los Angeles house on the trip when she first met Kanye West.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2018: Candace Owens visited Peter Thiel\'s Los Angeles house on the trip when she first met Kanye West. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Baron Coleman LIVE!! | Candace Ep 293 @ 00:33:58](/episodes/ep-9naMwS0kMBE.md#t-00-33-58)

</details>
</div>

<div class="timeline-event filter-item" id="event-2018-charlie-kirk-told-candace-owens-that-he-">
<div class="timeline-date">2018</div>
<div class="timeline-desc"><a href="/events/event-2018-charlie-kirk-told-candace-owens-that-he-.md">Charlie Kirk told Candace Owens that he believed he would die young.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2018: Charlie Kirk told Candace Owens that he believed he would die young. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [EXCLUSIVE: Leaked TPUSA Audio | Candace EP 296 @ 00:26:38](/episodes/ep-A39g5oqB_eM.md#t-00-26-32)

</details>
</div>

<div class="timeline-event filter-item" id="event-2018-candace-owens-said-she-and-charlie-kirk-">
<div class="timeline-date">2018</div>
<div class="timeline-desc"><a href="/events/event-2018-candace-owens-said-she-and-charlie-kirk-.md">Candace Owens said she and Charlie Kirk had a written conversation about his third eye.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2018: Candace Owens said she and Charlie Kirk had a written conversation about his third eye. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Halftime Wars: TPUSA vs The NFL | Candace Ep 304 @ 00:51:35](/episodes/ep-4YgrOhhy708.md#t-00-51-35)

</details>
</div>

**September**

<div class="timeline-event filter-item" id="event-2018-09-05-erika-kirk-and-charlie-kirk-began-dating">
<div class="timeline-date">2018-09-05</div>
<div class="timeline-desc"><a href="/events/event-2018-09-05-erika-kirk-and-charlie-kirk-began-dating.md">Erika Kirk and Charlie Kirk went on their first date on September 5, 2018.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2018-09-05: Erika Kirk and Charlie Kirk went on their first date on September 5, 2018. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:04:02](/episodes/ep-mFuno0TuuQQ.md#t-00-04-02)
- [Here’s Why It’s Time For The Police To Question... @ 00:30:11](/episodes/ep-ti5Fxrvegno.md#t-00-30-11)

</details>
</div>

<div class="timeline-event filter-item" id="event-2018-09-25-tyler-bowyer-posted-that-turning-point-u">
<div class="timeline-date">2018-09-25</div>
<div class="timeline-desc"><a href="/events/event-2018-09-25-tyler-bowyer-posted-that-turning-point-u.md">Tyler Bowyer posted that Turning Point USA ran everything like a military operation and its people had military backgrounds.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2018-09-25: Tyler Bowyer posted that Turning Point USA ran everything like a military operation and its people had military backgrounds. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Erika’s Inquisition: TPUSA Employees FIRED For…... @ 00:22:01](/episodes/ep-gG4ZoYUjUc8.md#t-00-21-29)

</details>
</div>

**October**

<div class="timeline-event filter-item" id="event-2018-10-24-candace-owens-inferred-that-erika-kirk-r">
<div class="timeline-date">2018-10-24</div>
<div class="timeline-desc"><a href="/events/event-2018-10-24-candace-owens-inferred-that-erika-kirk-r.md">Candace Owens inferred that Erika Kirk received her New York real estate license on October 24, 2018.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2018-10-24: Candace Owens inferred that Erika Kirk received her New York real estate license on October 24, 2018. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Here’s Why It’s Time For The Police To Question... @ 00:31:28](/episodes/ep-ti5Fxrvegno.md#t-00-30-54)

</details>
</div>


<h2 id="year-2019">2019</h2>

<div class="timeline-event filter-item" id="event-2019-tom-burt-retired-after-serving-22-years-">
<div class="timeline-date">2019</div>
<div class="timeline-desc"><a href="/events/event-2019-tom-burt-retired-after-serving-22-years-.md">Tom Burt retired after serving 22 years as executive vice president and COO of Duncan Aviation.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2019: Tom Burt retired after serving 22 years as executive vice president and COO of Duncan Aviation. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:39:19](/episodes/ep-HYn0P-P1wUw.md#t-00-38-59)

</details>
</div>

<div class="timeline-event filter-item" id="event-2019-erika-kirk-appeared-on-the-television-pr">
<div class="timeline-date">2019</div>
<div class="timeline-desc"><a href="/events/event-2019-erika-kirk-appeared-on-the-television-pr.md">Erika Kirk appeared on the television program Summer House.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2019: Erika Kirk appeared on the television program Summer House. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:19:36](/episodes/ep-CMcktj3Egfo.md#t-00-19-10)

</details>
</div>

<div class="timeline-event filter-item" id="event-2019-candace-owens-said-charlie-kirk-attended">
<div class="timeline-date">2019</div>
<div class="timeline-desc"><a href="/events/event-2019-candace-owens-said-charlie-kirk-attended.md">Candace Owens said Charlie Kirk attended a fundraising meeting with Ike Perlmutter at Mar-a-Lago.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2019: Candace Owens said Charlie Kirk attended a fundraising meeting with Ike Perlmutter at Mar-a-Lago. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:05:14](/episodes/ep-mFuno0TuuQQ.md#t-00-04-46)

</details>
</div>

<div class="timeline-event filter-item" id="event-2019-candace-owens-said-erika-kirk-filed-a-tr">
<div class="timeline-date">2019</div>
<div class="timeline-desc"><a href="/events/event-2019-candace-owens-said-erika-kirk-filed-a-tr.md">Candace Owens said Erika Kirk filed a trademark for Proclaimed Streetwear in 2019.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2019: Candace Owens said Erika Kirk filed a trademark for Proclaimed Streetwear in 2019. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Here’s Why It’s Time For The Police To Question... @ 00:32:27](/episodes/ep-ti5Fxrvegno.md#t-00-32-21)

</details>
</div>

**May**

<div class="timeline-event filter-item" id="event-2019-05-01-candace-owens-publicly-announced-her-res">
<div class="timeline-date">2019-05-01</div>
<div class="timeline-desc"><a href="/events/event-2019-05-01-candace-owens-publicly-announced-her-res.md">Candace Owens publicly announced her resignation as Turning Point USA communications director.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2019-05-01: Candace Owens publicly announced her resignation as Turning Point USA communications director. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:04:23](/episodes/ep-mFuno0TuuQQ.md#t-00-04-02)

</details>
</div>

**December**

<div class="timeline-event filter-item" id="event-2019-12-bassem-youssef-became-a-united-states-ci">
<div class="timeline-date">2019-12</div>
<div class="timeline-desc"><a href="/events/event-2019-12-bassem-youssef-became-a-united-states-ci.md">Bassem Youssef became a United States citizen.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2019-12: Bassem Youssef became a United States citizen. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Bassem Youssef | Candace Ep 298 @ 01:13:04](/episodes/ep-xjzb_t5Tk9o.md#t-01-12-51)

</details>
</div>


<h2 id="year-2020">2020</h2>

<div class="timeline-event filter-item" id="event-2020-alton-c-jennings-began-showing-signs-of-">
<div class="timeline-date">2020</div>
<div class="timeline-desc"><a href="/events/event-2020-alton-c-jennings-began-showing-signs-of-.md">Alton C. Jennings began showing signs of cognitive decline.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2020: Alton C. Jennings began showing signs of cognitive decline. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:16:01](/episodes/ep-ZZGWo6oDscc.md#t-00-15-58)

</details>
</div>

**January**

<div class="timeline-event filter-item" id="event-2020-01-01-covid-19-case-density-maps-became-a-comm">
<div class="timeline-date">2020-01-01</div>
<div class="timeline-desc"><a href="/events/event-2020-01-01-covid-19-case-density-maps-became-a-comm.md">COVID-19 case-density maps became a common public visualization during 2020 and 2021.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2020-01-01: COVID-19 case-density maps became a common public visualization during 2020 and 2021. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Judy Fan - DISI 2021 - Cognitive Technologies f... @ 00:00:04](/episodes/ep-yt-koVDYXSIfYo.md#t-00-00-00)

</details>
</div>


<h2 id="year-2021">2021</h2>

<div class="timeline-event filter-item" id="event-2021-candace-owens-said-charlie-kirk-and-jerr">
<div class="timeline-date">2021</div>
<div class="timeline-desc"><a href="/events/event-2021-candace-owens-said-charlie-kirk-and-jerr.md">Candace Owens said Charlie Kirk and Jerry Falwell Jr. established the Falkirk Center.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2021: Candace Owens said Charlie Kirk and Jerry Falwell Jr. established the Falkirk Center. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:17:57](/episodes/ep-CMcktj3Egfo.md#t-00-17-45)

</details>
</div>

<div class="timeline-event filter-item" id="event-2021-a-liberty-university-insider-said-johnni">
<div class="timeline-date">2021</div>
<div class="timeline-desc"><a href="/events/event-2021-a-liberty-university-insider-said-johnni.md">A Liberty University insider said Johnnie Moore joined a campus planning meeting about Charlie Kirk and the Falkirk Center.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2021: A Liberty University insider said Johnnie Moore joined a campus planning meeting about Charlie Kirk and the Falkirk Center. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:18:12](/episodes/ep-CMcktj3Egfo.md#t-00-17-45)

</details>
</div>

<div class="timeline-event filter-item" id="event-2021-candace-owens-said-jerry-prevo-succeeded">
<div class="timeline-date">2021</div>
<div class="timeline-desc"><a href="/events/event-2021-candace-owens-said-jerry-prevo-succeeded.md">Candace Owens said Jerry Prevo succeeded Jerry Falwell Jr., fired Charlie Kirk from Liberty University, and reinstated Johnnie Moore.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2021: Candace Owens said Jerry Prevo succeeded Jerry Falwell Jr., fired Charlie Kirk from Liberty University, and reinstated Johnnie Moore. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:27:02](/episodes/ep-CMcktj3Egfo.md#t-00-26-53)

</details>
</div>

<div class="timeline-event filter-item" id="event-2021-alton-c-jennings-hired-mitch-manley-sr-a">
<div class="timeline-date">2021</div>
<div class="timeline-desc"><a href="/events/event-2021-alton-c-jennings-hired-mitch-manley-sr-a.md">Alton C. Jennings hired Mitch Manley Sr. as his caretaker.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2021: Alton C. Jennings hired Mitch Manley Sr. as his caretaker. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:16:10](/episodes/ep-ZZGWo6oDscc.md#t-00-15-58)

</details>
</div>

<div class="timeline-event filter-item" id="event-2021-aubrey-leitch-began-working-for-turning-">
<div class="timeline-date">2021</div>
<div class="timeline-desc"><a href="/events/event-2021-aubrey-leitch-began-working-for-turning-.md">Aubrey Laitsch began working for Turning Point USA in 2021.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2021: Aubrey Laitsch began working for Turning Point USA in 2021. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:25:13](/episodes/ep-mFuno0TuuQQ.md#t-00-24-36)

</details>
</div>


<h2 id="year-2022">2022</h2>

<div class="timeline-event filter-item" id="event-2022-eddie-farnsworth-left-public-office">
<div class="timeline-date">2022</div>
<div class="timeline-desc"><a href="/events/event-2022-eddie-farnsworth-left-public-office.md">Eddie Farnsworth left public office.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2022: Eddie Farnsworth left public office. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:31:45](/episodes/ep-HYn0P-P1wUw.md#t-00-31-41)

</details>
</div>

<div class="timeline-event filter-item" id="event-2022-kanye-west-posted-the-death-con-3-messag">
<div class="timeline-date">2022</div>
<div class="timeline-desc"><a href="/events/event-2022-kanye-west-posted-the-death-con-3-messag.md">Kanye West posted the “Death Con 3” message that Candace Owens said later cost her millions of dollars.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2022: Kanye West posted the “Death Con 3” message that Candace Owens said later cost her millions of dollars. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:00:07](/episodes/ep-zSKrxIUMNqw.md#t-00-00-00)

</details>
</div>

<div class="timeline-event filter-item" id="event-2022-brooklyn-beckham-and-nicola-peltz-held-t">
<div class="timeline-date">2022</div>
<div class="timeline-desc"><a href="/events/event-2022-brooklyn-beckham-and-nicola-peltz-held-t.md">Brooklyn Beckham and Nicola Peltz held their wedding.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2022: Brooklyn Beckham and Nicola Peltz held their wedding. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [IN MY LAWSUIT ERA: Our First 'Cease And Desist'... @ 00:00:41](/episodes/ep-GY6GWceEqtQ.md#t-00-00-41)

</details>
</div>

<div class="timeline-event filter-item" id="event-2022-brazil-played-croatia-in-a-2022-world-cu">
<div class="timeline-date">2022</div>
<div class="timeline-desc"><a href="/events/event-2022-brazil-played-croatia-in-a-2022-world-cu.md">Brazil played Croatia in a 2022 World Cup match that was streamed on YouTube.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2022: Brazil played Croatia in a 2022 World Cup match that was streamed on YouTube. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Halftime Wars: TPUSA vs The NFL | Candace Ep 304 @ 00:12:41](/episodes/ep-4YgrOhhy708.md#t-00-12-10)

</details>
</div>

**April**

<div class="timeline-event filter-item" id="event-2022-04-candace-owens-said-erika-kirks-previous-">
<div class="timeline-date">2022-04</div>
<div class="timeline-desc"><a href="/events/event-2022-04-candace-owens-said-erika-kirks-previous-.md">Candace Owens said Erika Kirk's previous Instagram post about her mother before September 2025 was in April 2022, possibly on Mother's Day.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2022-04: Candace Owens said Erika Kirk\'s previous Instagram post about her mother before September 2025 was in April 2022, possibly on Mother\'s Day. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CRUMBLING ALIBIS: From 9/11 To 9/10. | Candace ... @ 00:23:29](/episodes/ep-QRS_hR7NXaQ.md#t-00-23-23)

</details>
</div>

**July**

<div class="timeline-event filter-item" id="event-2022-07-08-former-japanese-prime-minister-shinzo-ab">
<div class="timeline-date">2022-07-08</div>
<details><summary class="timeline-desc truncated"><a href="/events/event-2022-07-08-former-japanese-prime-minister-shinzo-ab.md">Former Japanese prime minister Shinzo Abe was assassinated; the attacker said Abe’s Unification Church ties contributed to his family’s financial r...</a></summary>
<p class="timeline-desc"><a href="/events/event-2022-07-08-former-japanese-prime-minister-shinzo-ab.md">Former Japanese prime minister Shinzo Abe was assassinated; the attacker said Abe’s Unification Church ties contributed to his family’s financial ruin.</a></p>
</details>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2022-07-08: Former Japanese prime minister Shinzo Abe was assassinated; the attacker said Abe’s Unification Church ties contributed to his family’s financial ruin. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:13:19](/episodes/ep-CMcktj3Egfo.md#t-00-12-51)

</details>
</div>

**October**

<div class="timeline-event filter-item" id="event-2022-10-the-daily-wire-changed-candace-owenss-co">
<div class="timeline-date">2022-10</div>
<div class="timeline-desc"><a href="/events/event-2022-10-the-daily-wire-changed-candace-owenss-co.md">The Daily Wire changed Candace Owens's contract after she refused to issue a public statement condemning Kanye West.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2022-10: The Daily Wire changed Candace Owens\'s contract after she refused to issue a public statement condemning Kanye West. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:39:34](/episodes/ep-zSKrxIUMNqw.md#t-00-39-32)

</details>
</div>


<h2 id="year-2023">2023</h2>

<div class="timeline-event filter-item" id="event-2023-candace-owens-publicly-defended-rihannas">
<div class="timeline-date">2023</div>
<div class="timeline-desc"><a href="/events/event-2023-candace-owens-publicly-defended-rihannas.md">Candace Owens publicly defended Rihanna's Super Bowl halftime performance.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2023: Candace Owens publicly defended Rihanna\'s Super Bowl halftime performance. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Halftime Wars: TPUSA vs The NFL | Candace Ep 304 @ 00:01:19](/episodes/ep-4YgrOhhy708.md#t-00-00-59)

</details>
</div>

**October**

<div class="timeline-event filter-item" id="event-2023-10-07-the-october-7-hamas-led-attack-on-israel">
<div class="timeline-date">2023-10-07</div>
<div class="timeline-desc"><a href="/events/event-2023-10-07-the-october-7-hamas-led-attack-on-israel.md">The October 7 Hamas-led attack on Israel occurred.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">9× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2023-10-07: The October 7 Hamas-led attack on Israel occurred. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Myron Gaines x Candace Owens @ 00:33:14](/episodes/ep-2T39-oADLj0.md#t-00-33-05)
- [Myron Gaines x Candace Owens @ 00:34:21](/episodes/ep-2T39-oADLj0.md#t-00-34-12)
- [Candace x Bassem Youssef | Candace Ep 298 @ 00:11:27](/episodes/ep-xjzb_t5Tk9o.md#t-00-11-27)
- [Candace x Bassem Youssef | Candace Ep 298 @ 00:11:47](/episodes/ep-xjzb_t5Tk9o.md#t-00-11-40)
- [Candace x Bassem Youssef | Candace Ep 298 @ 00:11:55](/episodes/ep-xjzb_t5Tk9o.md#t-00-11-40)
- [Candace x Bassem Youssef | Candace Ep 298 @ 00:15:31](/episodes/ep-xjzb_t5Tk9o.md#t-00-15-28)
- [Candace x Bassem Youssef | Candace Ep 298 @ 00:37:21](/episodes/ep-xjzb_t5Tk9o.md#t-00-37-06)
- [Candace x Bassem Youssef | Candace Ep 298 @ 01:24:10](/episodes/ep-xjzb_t5Tk9o.md#t-01-24-10)
- [Candace x Bassem Youssef | Candace Ep 298 @ 01:34:02](/episodes/ep-xjzb_t5Tk9o.md#t-01-34-00)

</details>
</div>

<div class="timeline-event filter-item" id="event-2023-10-17-bassem-youssef-appeared-on-piers-morgan-">
<div class="timeline-date">2023-10-17</div>
<div class="timeline-desc"><a href="/events/event-2023-10-17-bassem-youssef-appeared-on-piers-morgan-.md">Bassem Youssef appeared on Piers Morgan Uncensored and the interview went viral.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2023-10-17: Bassem Youssef appeared on Piers Morgan Uncensored and the interview went viral. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Myron Gaines x Candace Owens @ 00:33:19](/episodes/ep-2T39-oADLj0.md#t-00-33-05)

</details>
</div>

**November**

<div class="timeline-event filter-item" id="event-2023-11-alton-c-jennings-changed-his-will">
<div class="timeline-date">2023-11</div>
<div class="timeline-desc"><a href="/events/event-2023-11-alton-c-jennings-changed-his-will.md">Alton C. Jennings changed his will.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2023-11: Alton C. Jennings changed his will. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:17:08](/episodes/ep-ZZGWo6oDscc.md#t-00-16-43)

</details>
</div>


<h2 id="year-2026">2026</h2>

**January**

<div class="timeline-event filter-item" id="event-2026-01-03-the-united-states-captured-nicolás-madur">
<div class="timeline-date">2026-01-03</div>
<div class="timeline-desc"><a href="/events/event-2026-01-03-the-united-states-captured-nicolás-madur.md">The United States captured Nicolás Maduro in a military operation in Venezuela.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01-03: The United States captured Nicolás Maduro in a military operation in Venezuela. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [You Won't Believe What Happened While We Were O... @ 01:03:14](/episodes/ep-OEAHy3SsIiI.md#t-01-03-08)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-05-candace-owens-reported-that-the-daily-wi">
<div class="timeline-date">2026-01-05</div>
<div class="timeline-desc"><a href="/events/event-2026-01-05-candace-owens-reported-that-the-daily-wi.md">Candace Owens reported that the Daily Wire reactivated her old social-media accounts and released an old promotional trailer.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01-05: Candace Owens reported that the Daily Wire reactivated her old social-media accounts and released an old promotional trailer. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [You Won't Believe What Happened While We Were O... @ 00:31:02](/episodes/ep-OEAHy3SsIiI.md#t-00-30-26)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-05-a-paris-court-convicted-defendants-of-cy">
<div class="timeline-date">2026-01-05</div>
<div class="timeline-desc"><a href="/events/event-2026-01-05-a-paris-court-convicted-defendants-of-cy.md">A Paris court convicted defendants of cyberbullying Brigitte Macron.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01-05: A Paris court convicted defendants of cyberbullying Brigitte Macron. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [You Won't Believe What Happened While We Were O... @ 00:20:12](/episodes/ep-OEAHy3SsIiI.md#t-00-19-44)
- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 00:53:55](/episodes/ep-HYn0P-P1wUw.md#t-00-53-16)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-05-likud-knesset-member-dan-illouz-delivere">
<div class="timeline-date">2026-01-05</div>
<div class="timeline-desc"><a href="/events/event-2026-01-05-likud-knesset-member-dan-illouz-delivere.md">Likud Knesset member Dan Illouz delivered a speech attacking Tucker Carlson and Candace Owens as an internal threat to the West.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01-05: Likud Knesset member Dan Illouz delivered a speech attacking Tucker Carlson and Candace Owens as an internal threat to the West. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:34:41](/episodes/ep-CMcktj3Egfo.md#t-00-34-00)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-06-austin-smith-was-sentenced-for-using-for">
<div class="timeline-date">2026-01-06</div>
<div class="timeline-desc"><a href="/events/event-2026-01-06-austin-smith-was-sentenced-for-using-for.md">Austin Smith was sentenced for using forged nomination-petition signatures in his 2024 primary campaign.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01-06: Austin Smith was sentenced for using forged nomination-petition signatures in his 2024 primary campaign. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [DEFCON 3: Ben Shapiro’s Legacy Of No-Nos | Cand... @ 00:48:04](/episodes/ep-zSKrxIUMNqw.md#t-00-47-30)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-09-candace-owens-scheduled-a-two-hour-book-">
<div class="timeline-date">2026-01-09</div>
<div class="timeline-desc"><a href="/events/event-2026-01-09-candace-owens-scheduled-a-two-hour-book-.md">Candace Owens scheduled a two-hour book-club episode to finish Sigmund Freud and the Jewish Mystical Tradition.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01-09: Candace Owens scheduled a two-hour book-club episode to finish Sigmund Freud and the Jewish Mystical Tradition. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BREAKING NEWS: Where Tyler Robinson Went On The... @ 01:01:26](/episodes/ep-HYn0P-P1wUw.md#t-01-00-57)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-13-scott-adams-died-at-age-68-after-prostat">
<div class="timeline-date">2026-01-13</div>
<div class="timeline-desc"><a href="/events/event-2026-01-13-scott-adams-died-at-age-68-after-prostat.md">Scott Adams died at age 68 after prostate cancer.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01-13: Scott Adams died at age 68 after prostate cancer. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [CODE RED: Another TPUSA Trafficking Scandal?! |... @ 00:38:12](/episodes/ep-ZZGWo6oDscc.md#t-00-37-38)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-19-candace-owens-said-she-received-a-tip-th">
<div class="timeline-date">2026-01-19</div>
<div class="timeline-desc"><a href="/events/event-2026-01-19-candace-owens-said-she-received-a-tip-th.md">Candace Owens said she received a tip that Dan Flood had been promoted at Turning Point USA.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01-19: Candace Owens said she received a tip that Dan Flood had been promoted at Turning Point USA. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Baron Coleman LIVE!! | Candace Ep 293 @ 00:05:32](/episodes/ep-9naMwS0kMBE.md#t-00-05-07)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-20-dave-rubin-posted-that-candace-owens-had">
<div class="timeline-date">2026-01-20</div>
<div class="timeline-desc"><a href="/events/event-2026-01-20-dave-rubin-posted-that-candace-owens-had.md">Dave Rubin posted that Candace Owens had told him she hated Charlie Kirk.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01-20: Dave Rubin posted that Candace Owens had told him she hated Charlie Kirk. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Baron Coleman LIVE!! | Candace Ep 293 @ 00:30:51](/episodes/ep-9naMwS0kMBE.md#t-00-30-25)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-20-candace-owens-received-a-cease-and-desis">
<div class="timeline-date">2026-01-20</div>
<div class="timeline-desc"><a href="/events/event-2026-01-20-candace-owens-received-a-cease-and-desis.md">Candace Owens received a cease-and-desist letter from Turning Point USA.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01-20: Candace Owens received a cease-and-desist letter from Turning Point USA. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [IN MY LAWSUIT ERA: Our First 'Cease And Desist'... @ 00:00:06](/episodes/ep-GY6GWceEqtQ.md#t-00-00-00)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-23-candace-owens-scheduled-the-next-book-cl">
<div class="timeline-date">2026-01-23</div>
<div class="timeline-desc"><a href="/events/event-2026-01-23-candace-owens-scheduled-the-next-book-cl.md">Candace Owens scheduled the next book-club session for January 23, 2026.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01-23: Candace Owens scheduled the next book-club session for January 23, 2026. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [American Horror Story: Charlie Kirk’s “Shining”... @ 00:47:14](/episodes/ep-CMcktj3Egfo.md#t-00-46-33)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-26-kanye-west-published-a-full-page-apology">
<div class="timeline-date">2026-01-26</div>
<div class="timeline-desc"><a href="/events/event-2026-01-26-kanye-west-published-a-full-page-apology.md">Kanye West published a full-page apology advertisement in The Wall Street Journal.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01-26: Kanye West published a full-page apology advertisement in The Wall Street Journal. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [EXCLUSIVE: Leaked TPUSA Audio | Candace EP 296 @ 00:43:50](/episodes/ep-A39g5oqB_eM.md#t-00-43-34)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-29-federal-agents-arrested-journalist-don-l">
<div class="timeline-date">2026-01-29</div>
<div class="timeline-desc"><a href="/events/event-2026-01-29-federal-agents-arrested-journalist-don-l.md">Federal agents arrested journalist Don Lemon in connection with a Minnesota church protest.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01-29: Federal agents arrested journalist Don Lemon in connection with a Minnesota church protest. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [AND ANOTHER ONE: Charlie's Text On September 9t... @ 00:44:38](/episodes/ep-Wjul6YV6izo.md#t-00-44-24)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-29-candace-owens-said-andrew-kolvet-michael">
<div class="timeline-date">2026-01-29</div>
<div class="timeline-desc"><a href="/events/event-2026-01-29-candace-owens-said-andrew-kolvet-michael.md">Candace Owens said Andrew Kolvet, Michael McCoy, and McCoy's wife met with senior White House officials.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01-29: Candace Owens said Andrew Kolvet, Michael McCoy, and McCoy\'s wife met with senior White House officials. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [BAAL SO HARD: The Epstein Files | Candace Ep 300 @ 00:30:17](/episodes/ep-CEF7gQRWYCE.md#t-00-29-56)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-erika-kirk-sent-a-video-in-january-2026-">
<div class="timeline-date">2026-01</div>
<div class="timeline-desc"><a href="/events/event-2026-01-erika-kirk-sent-a-video-in-january-2026-.md">Erika Kirk sent a video in January 2026 in response to Candace Owens's request concerning her Fort Huachuca alibi.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01: Erika Kirk sent a video in January 2026 in response to Candace Owens\'s request concerning her Fort Huachuca alibi. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [OH SNAP! We Were Right About Fort Huachuca. | C... @ 00:13:36](/episodes/ep-X92MllIHDzw.md#t-00-13-23)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-turning-point-usas-florida-campus-was-re">
<div class="timeline-date">2026-01</div>
<div class="timeline-desc"><a href="/events/event-2026-01-turning-point-usas-florida-campus-was-re.md">Turning Point USA's Florida campus was reported as being renamed the Buckman Campus following a $10 million gift from Karl and Nelda Buckman.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01: Turning Point USA\'s Florida campus was reported as being renamed the Buckman Campus following a $10 million gift from Karl and Nelda Buckman. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [OH SNAP! We Were Right About Fort Huachuca. | C... @ 00:20:41](/episodes/ep-X92MllIHDzw.md#t-00-20-05)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-astrid-tuminez-stepped-down-as-president">
<div class="timeline-date">2026-01</div>
<div class="timeline-desc"><a href="/events/event-2026-01-astrid-tuminez-stepped-down-as-president.md">Astrid Tuminez stepped down as president of Utah Valley University in January 2026.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01: Astrid Tuminez stepped down as president of Utah Valley University in January 2026. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [OH SNAP! We Were Right About Fort Huachuca. | C... @ 00:31:54](/episodes/ep-X92MllIHDzw.md#t-00-31-37)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-zach-de-gregorio-received-a-cease-and-de">
<div class="timeline-date">2026-01</div>
<div class="timeline-desc"><a href="/events/event-2026-01-zach-de-gregorio-received-a-cease-and-de.md">Zach De Gregorio received a cease-and-desist letter from Turning Point USA.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01: Zach De Gregorio received a cease-and-desist letter from Turning Point USA. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [A Legal Turning Point? | Candace Ep 292 @ 00:20:51](/episodes/ep-NIEbqsLAK8g.md#t-00-20-51)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-candace-owens-said-she-learned-that-dan-">
<div class="timeline-date">2026-01</div>
<div class="timeline-desc"><a href="/events/event-2026-01-candace-owens-said-she-learned-that-dan-.md">Candace Owens said she learned that Dan Flood lived in New Braunfels, Texas.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01: Candace Owens said she learned that Dan Flood lived in New Braunfels, Texas. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [A Legal Turning Point? | Candace Ep 292 @ 00:12:46](/episodes/ep-NIEbqsLAK8g.md#t-00-12-40)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-baron-coleman-said-turning-point-usa-pur">
<div class="timeline-date">2026-01</div>
<div class="timeline-desc"><a href="/events/event-2026-01-baron-coleman-said-turning-point-usa-pur.md">Baron Coleman said Turning Point USA purged 30 to 40 employees while looking for a leak.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">2× in 2 eps</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01: Baron Coleman said Turning Point USA purged 30 to 40 employees while looking for a leak. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Baron Coleman LIVE!! | Candace Ep 293 @ 00:01:07](/episodes/ep-9naMwS0kMBE.md#t-00-01-07)
- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:24:36](/episodes/ep-mFuno0TuuQQ.md#t-00-24-24)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-baron-coleman-retired-from-his-other-job">
<div class="timeline-date">2026-01</div>
<div class="timeline-desc"><a href="/events/event-2026-01-baron-coleman-retired-from-his-other-job.md">Baron Coleman retired from his other job and began podcasting full time.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01: Baron Coleman retired from his other job and began podcasting full time. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Candace x Baron Coleman LIVE!! | Candace Ep 293 @ 01:22:14](/episodes/ep-9naMwS0kMBE.md#t-01-22-04)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-aubrey-leitch-said-she-was-part-of-a-gro">
<div class="timeline-date">2026-01</div>
<div class="timeline-desc"><a href="/events/event-2026-01-aubrey-leitch-said-she-was-part-of-a-gro.md">Aubrey Laitsch said she was part of a group terminated from Turning Point USA around January 2026.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01: Aubrey Laitsch said she was part of a group terminated from Turning Point USA around January 2026. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:25:59](/episodes/ep-mFuno0TuuQQ.md#t-00-25-59)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-01-candace-owens-said-turning-point-usa-als">
<div class="timeline-date">2026-01</div>
<div class="timeline-desc"><a href="/events/event-2026-01-candace-owens-said-turning-point-usa-als.md">Candace Owens said Turning Point USA also fired Aubrey Laitsch's fiance on the same day.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-01: Candace Owens said Turning Point USA also fired Aubrey Laitsch\'s fiance on the same day. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:44:07](/episodes/ep-mFuno0TuuQQ.md#t-00-44-01)

</details>
</div>

**February**

<div class="timeline-event filter-item" id="event-2026-02-04-erika-kirk-called-for-transparency-about">
<div class="timeline-date">2026-02-04</div>
<div class="timeline-desc"><a href="/events/event-2026-02-04-erika-kirk-called-for-transparency-about.md">Erika Kirk called for transparency about her husband's killing during a Fox News interview.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-02-04: Erika Kirk called for transparency about her husband\'s killing during a Fox News interview. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:01:18](/episodes/ep-mFuno0TuuQQ.md#t-00-01-11)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-02-05-former-turning-point-usa-employees-launc">
<div class="timeline-date">2026-02-05</div>
<div class="timeline-desc"><a href="/events/event-2026-02-05-former-turning-point-usa-employees-launc.md">Former Turning Point USA employees launched the Purge Fallout GoFundMe campaign.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-02-05: Former Turning Point USA employees launched the Purge Fallout GoFundMe campaign. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:35:15](/episodes/ep-mFuno0TuuQQ.md#t-00-34-53)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-02-08-bad-bunny-performed-the-super-bowl-halft">
<div class="timeline-date">2026-02-08</div>
<div class="timeline-desc"><a href="/events/event-2026-02-08-bad-bunny-performed-the-super-bowl-halft.md">Bad Bunny performed the Super Bowl halftime show.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-02-08: Bad Bunny performed the Super Bowl halftime show. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Halftime Wars: TPUSA vs The NFL | Candace Ep 304 @ 00:05:31](/episodes/ep-4YgrOhhy708.md#t-00-05-31)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-02-08-turning-point-usa-aired-its-prerecorded-">
<div class="timeline-date">2026-02-08</div>
<div class="timeline-desc"><a href="/events/event-2026-02-08-turning-point-usa-aired-its-prerecorded-.md">Turning Point USA aired its prerecorded All-American Halftime Show as a Super Bowl halftime alternative.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-02-08: Turning Point USA aired its prerecorded All-American Halftime Show as a Super Bowl halftime alternative. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Halftime Wars: TPUSA vs The NFL | Candace Ep 304 @ 00:09:57](/episodes/ep-4YgrOhhy708.md#t-00-09-30)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-02-09-the-religious-liberty-commission-held-a-">
<div class="timeline-date">2026-02-09</div>
<div class="timeline-desc"><a href="/events/event-2026-02-09-the-religious-liberty-commission-held-a-.md">The Religious Liberty Commission held a hearing on antisemitism where Carrie Prejean Boller questioned Seth Dillon under oath.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-02-09: The Religious Liberty Commission held a hearing on antisemitism where Carrie Prejean Boller questioned Seth Dillon under oath. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [Halftime Wars: TPUSA vs The NFL | Candace Ep 304 @ 00:31:24](/episodes/ep-4YgrOhhy708.md#t-00-31-24)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-02-aubrey-leitch-posted-a-public-video-desc">
<div class="timeline-date">2026-02</div>
<div class="timeline-desc"><a href="/events/event-2026-02-aubrey-leitch-posted-a-public-video-desc.md">Aubrey Laitsch posted a public video describing her termination from Turning Point USA.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-02: Aubrey Laitsch posted a public video describing her termination from Turning Point USA. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:24:24](/episodes/ep-mFuno0TuuQQ.md#t-00-24-24)

</details>
</div>

<div class="timeline-event filter-item" id="event-2026-02-candace-owens-said-doug-degroote-met-wit">
<div class="timeline-date">2026-02</div>
<div class="timeline-desc"><a href="/events/event-2026-02-candace-owens-said-doug-degroote-met-wit.md">Candace Owens said Doug DeGroote met with a former Charlie Kirk assistant to discuss investments.</a></div>
<div class="timeline-meta">
<span class="timeline-badge mentions">1× in 1 ep</span>
<button class="share-btn" onclick="navigator.clipboard.writeText('2026-02: Candace Owens said Doug DeGroote met with a former Charlie Kirk assistant to discuss investments. - Content Knowledge Graph');this.textContent='✓';setTimeout(()=>this.textContent='📋',1500)" title="Copy">📋</button>
</div>
<details>
<summary style="font-size:0.85em;color:var(--gray);cursor:pointer;">Show episode mentions</summary>

- [An Open Letter To Erika Kirk | Candace Ep 303 @ 00:23:32](/episodes/ep-mFuno0TuuQQ.md#t-00-23-00)

</details>
</div>

</div>
</div>
