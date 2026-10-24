
import React, { useState } from "react";
import {
  MapPin,
  Map,
  Search,
  TrendingUp,
  Navigation,
  CheckCircle2,
  ArrowUpRight,
  Target,
  Crosshair,
} from "lucide-react";

const locations = [
  { id: 1, name: "City Center", rank: 1, x: 49, y: 29 },
  { id: 2, name: "North District", rank: 2, x: 72, y: 18 },
  { id: 3, name: "West Market", rank: 3, x: 24, y: 43 },
  { id: 4, name: "South Avenue", rank: 5, x: 63, y: 65 },
  { id: 5, name: "East Square", rank: 2, x: 83, y: 43 },
  { id: 6, name: "Central Park", rank: 4, x: 38, y: 72 },
  { id: 7, name: "Business Hub", rank: 1, x: 56, y: 46 },
  { id: 8, name: "Old Town", rank: 6, x: 17, y: 20 },
  { id: 9, name: "Tech Park", rank: 3, x: 80, y: 77 },
];

const LocalSeoMapVisualization = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [activeView, setActiveView] = useState("rank");

  const getRankColor = (rank) => {
    if (rank <= 3) return "#00B88A";
    if (rank <= 5) return "#E8A23A";
    return "#E16A6A";
  };

  return (
    <section className="lsm-section">
      <div className="lsm-container">
        {/* Section Heading */}
        <div className="lsm-heading">
          <span className="lsm-eyebrow">
            <Crosshair size={15} />
            LOCAL SEARCH VISIBILITY
          </span>

          <h2>
            See Where Your Business
            <br />
            <span>Ranks on the Map</span>
          </h2>

          <p>
            Local search visibility can vary from one neighbourhood to another.
            Understand how geographic ranking tracking helps identify stronger
            areas and opportunities for growth.
          </p>
        </div>

        {/* Main Dashboard */}
        <div className="lsm-dashboard">
          {/* Left Map Panel */}
          <div className="lsm-map-panel">
            <div className="lsm-panel-top">
              <div className="lsm-panel-title">
                <div className="lsm-icon-box">
                  <Map size={19} />
                </div>

                <div>
                  <h3>Local Rank Explorer</h3>
                  <span>Illustrative geo-grid preview</span>
                </div>
              </div>

              <span className="lsm-live-badge">
                <span />
                DEMO DATA
              </span>
            </div>

            {/* Search Bar */}
            <div className="lsm-search">
              <Search size={17} />
              <span>web design company near me</span>
              <span className="lsm-search-tag">Local</span>
            </div>

            {/* Visual Map */}
            <div className="lsm-map">
              <div className="lsm-map-grid" />

              <div className="lsm-road lsm-road-one" />
              <div className="lsm-road lsm-road-two" />
              <div className="lsm-road lsm-road-three" />
              <div className="lsm-road lsm-road-four" />

              <div className="lsm-park lsm-park-one" />
              <div className="lsm-park lsm-park-two" />

              <span className="lsm-map-label lsm-label-one">
                NORTH DISTRICT
              </span>

              <span className="lsm-map-label lsm-label-two">
                CENTRAL ZONE
              </span>

              <span className="lsm-map-label lsm-label-three">
                BUSINESS AREA
              </span>

              {locations.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  className={`lsm-pin ${
                    selectedLocation.id === location.id
                      ? "lsm-pin-active"
                      : ""
                  }`}
                  style={{
                    left: `${location.x}%`,
                    top: `${location.y}%`,
                    "--pin-color": getRankColor(location.rank),
                  }}
                  onClick={() => setSelectedLocation(location)}
                  aria-label={`${location.name}, illustrative rank ${location.rank}`}
                  title={location.name}
                >
                  <MapPin size={15} />
                  <span>{location.rank}</span>
                </button>
              ))}

              <div className="lsm-map-legend">
                <span>
                  <i style={{ background: "#00B88A" }} />
                  Top 3
                </span>
                <span>
                  <i style={{ background: "#E8A23A" }} />
                  4–5
                </span>
                <span>
                  <i style={{ background: "#E16A6A" }} />
                  6+
                </span>
              </div>

              <div className="lsm-map-control">
                <Navigation size={17} />
              </div>
            </div>

            {/* Selected Location */}
            <div className="lsm-selected-location">
              <div className="lsm-location-icon">
                <MapPin size={19} />
              </div>

              <div className="lsm-location-info">
                <span>SELECTED LOCATION</span>
                <h4>{selectedLocation.name}</h4>
              </div>

              <div className="lsm-rank-value">
                <span>DEMO RANK</span>
                <strong style={{ color: getRankColor(selectedLocation.rank) }}>
                  #{selectedLocation.rank}
                </strong>
              </div>
            </div>
          </div>

          {/* Right Information Panel */}
          <div className="lsm-info-panel">
            <div className="lsm-info-heading">
              <span className="lsm-info-icon">
                <Target size={21} />
              </span>

              <div>
                <span>YOUR LOCAL SEO</span>
                <h3>Visibility Overview</h3>
              </div>
            </div>

            <p className="lsm-info-description">
              Explore sample location-level rankings to understand how
              businesses can monitor local search performance.
            </p>

            {/* Toggle */}
            <div className="lsm-view-toggle">
              <button
                type="button"
                className={activeView === "rank" ? "active" : ""}
                onClick={() => setActiveView("rank")}
              >
                <MapPin size={15} />
                Rankings
              </button>

              <button
                type="button"
                className={activeView === "coverage" ? "active" : ""}
                onClick={() => setActiveView("coverage")}
              >
                <Crosshair size={15} />
                Coverage
              </button>
            </div>

            {activeView === "rank" ? (
              <div className="lsm-metric-card">
                <div className="lsm-metric-top">
                  <span>Locations in top 3</span>
                  <TrendingUp size={18} />
                </div>

                <div className="lsm-metric-number">
                  {locations.filter((item) => item.rank <= 3).length}
                  <span> / {locations.length} sample points</span>
                </div>

                <div className="lsm-progress">
                  <span
                    style={{
                      width: `${
                        (locations.filter((item) => item.rank <= 3).length /
                          locations.length) *
                        100
                      }%`,
                    }}
                  />
                </div>

                <small>Illustrative data, not actual client results</small>
              </div>
            ) : (
              <div className="lsm-metric-card">
                <div className="lsm-metric-top">
                  <span>Tracked sample locations</span>
                  <Crosshair size={18} />
                </div>

                <div className="lsm-metric-number">
                  {locations.length}
                  <span> sample points</span>
                </div>

                <p className="lsm-coverage-note">
                  A geo-grid can help compare visibility across different
                  areas around a business location.
                </p>
              </div>
            )}

            <div className="lsm-location-list">
              <h4>Explore Locations</h4>

              {locations.slice(0, 4).map((location) => (
                <button
                  type="button"
                  key={location.id}
                  className={`lsm-location-row ${
                    selectedLocation.id === location.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedLocation(location)}
                >
                  <span
                    className="lsm-location-dot"
                    style={{ background: getRankColor(location.rank) }}
                  />

                  <span className="lsm-row-name">{location.name}</span>

                  <span
                    className="lsm-row-rank"
                    style={{ color: getRankColor(location.rank) }}
                  >
                    #{location.rank}
                  </span>

                  <ArrowUpRight size={15} />
                </button>
              ))}
            </div>

            <div className="lsm-insight">
              <CheckCircle2 size={18} />
              <p>
                <strong>Local insight</strong>
                <br />
                Track location-level visibility to discover areas that may
                need additional local SEO attention.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Benefits */}
        <div className="lsm-benefits">
          <div>
            <span className="lsm-benefit-icon">
              <MapPin size={19} />
            </span>
            <div>
              <h4>Location-Level Tracking</h4>
              <p>Compare rankings across neighbourhoods.</p>
            </div>
          </div>

          <div>
            <span className="lsm-benefit-icon">
              <Target size={19} />
            </span>
            <div>
              <h4>Ranking Opportunities</h4>
              <p>Identify areas for focused optimisation.</p>
            </div>
          </div>

          <div>
            <span className="lsm-benefit-icon">
              <TrendingUp size={19} />
            </span>
            <div>
              <h4>Performance Monitoring</h4>
              <p>Review visibility changes over time.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .lsm-section {
          padding: 100px 24px;
          background: #f3f9fb;
          color: #10192d;
          overflow: hidden;
        }

        .lsm-container {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
        }

        .lsm-heading {
          max-width: 790px;
          margin: 0 auto 54px;
          text-align: center;
        }

        .lsm-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 15px;
          border: 1px solid #b8e7e3;
          border-radius: 50px;
          background: #e4f7f4;
          color: #00566a;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .lsm-heading h2 {
          margin: 22px 0 17px;
          color: #10192d;
          font-size: clamp(32px, 4.2vw, 54px);
          font-weight: 850;
          line-height: 1.14;
          letter-spacing: -2px;
        }

        .lsm-heading h2 span {
          color: #007e94;
        }

        .lsm-heading > p {
          max-width: 720px;
          margin: 0 auto;
          color: #53647b;
          font-size: 16px;
          line-height: 1.9;
        }

        .lsm-dashboard {
          display: grid;
          grid-template-columns: minmax(0, 1.5fr) minmax(300px, .8fr);
          gap: 24px;
          align-items: stretch;
        }

        .lsm-map-panel,
        .lsm-info-panel {
          min-width: 0;
          padding: 25px;
          border: 1px solid #e0e9f0;
          border-radius: 24px;
          background: #ffffff;
          box-shadow: 0 18px 50px rgba(16, 40, 61, .06);
        }

        .lsm-panel-top,
        .lsm-panel-title,
        .lsm-info-heading {
          display: flex;
          align-items: center;
        }

        .lsm-panel-top {
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 22px;
        }

        .lsm-panel-title {
          gap: 12px;
        }

        .lsm-icon-box,
        .lsm-info-icon,
        .lsm-location-icon,
        .lsm-benefit-icon {
          display: grid;
          flex-shrink: 0;
          place-items: center;
          width: 44px;
          height: 44px;
          border-radius: 13px;
          background: #e5f5f6;
          color: #00566a;
        }

        .lsm-panel-title h3,
        .lsm-info-heading h3 {
          margin: 0;
          font-size: 17px;
          font-weight: 800;
        }

        .lsm-panel-title > div:last-child > span,
        .lsm-info-heading > div > span {
          display: block;
          margin-top: 5px;
          color: #7c8ba0;
          font-size: 11px;
        }

        .lsm-live-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 10px;
          border-radius: 30px;
          background: #e9f8f2;
          color: #008768;
          font-size: 9px;
          font-weight: 800;
          white-space: nowrap;
        }

        .lsm-live-badge > span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #00b88a;
        }

        .lsm-search {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
          margin-bottom: 17px;
          padding: 14px;
          border: 1px solid #e4edf2;
          border-radius: 12px;
          background: #f8fbfc;
          color: #52657a;
          font-size: 12px;
        }

        .lsm-search > span:nth-child(2) {
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .lsm-search > svg {
          flex-shrink: 0;
          color: #007e94;
        }

        .lsm-search-tag {
          padding: 5px 8px;
          border-radius: 6px;
          background: #e1f5f5;
          color: #00566a;
          font-size: 10px;
          font-weight: 800;
        }

        .lsm-map {
          position: relative;
          height: 370px;
          overflow: hidden;
          isolation: isolate;
          border: 1px solid #dce9e6;
          border-radius: 17px;
          background: #eaf3ed;
        }

        .lsm-map-grid {
          position: absolute;
          z-index: -1;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.48) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.48) 1px, transparent 1px);
          background-size: 37px 37px;
        }

        .lsm-road {
          position: absolute;
          z-index: -1;
          height: 20px;
          border: 4px solid #ffffff;
          border-left: 0;
          border-right: 0;
          background: #d6e1dd;
          box-shadow: 0 0 0 1px rgba(167, 188, 180, .3);
        }

        .lsm-road-one {
          top: 42%;
          left: -12%;
          width: 125%;
          transform: rotate(-22deg);
        }

        .lsm-road-two {
          top: 49%;
          left: -15%;
          width: 130%;
          transform: rotate(30deg);
        }

        .lsm-road-three {
          top: 23%;
          left: 25%;
          width: 95%;
          transform: rotate(75deg);
        }

        .lsm-road-four {
          top: 72%;
          left: 12%;
          width: 95%;
          transform: rotate(-64deg);
        }

        .lsm-park {
          position: absolute;
          z-index: -1;
          border: 1px solid #c5e5ce;
          border-radius: 35% 15% 30% 15%;
          background: #cce8cf;
          transform: rotate(-18deg);
        }

        .lsm-park-one {
          top: 10%;
          left: 4%;
          width: 19%;
          height: 20%;
        }

        .lsm-park-two {
          right: 6%;
          bottom: 7%;
          width: 23%;
          height: 19%;
        }

        .lsm-map-label {
          position: absolute;
          color: #6c897d;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
          pointer-events: none;
        }

        .lsm-label-one { top: 8%; right: 8%; }
        .lsm-label-two { top: 56%; left: 38%; }
        .lsm-label-three { bottom: 8%; left: 8%; }

        .lsm-pin {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
          z-index: 2;
          padding: 7px 8px;
          border: 2px solid #ffffff;
          border-radius: 22px;
          background: var(--pin-color);
          color: #ffffff;
          box-shadow: 0 5px 14px rgba(12, 40, 47, .2);
          cursor: pointer;
          transform: translate(-50%, -50%);
          transition: transform .2s ease, box-shadow .2s ease;
        }

        .lsm-pin:hover,
        .lsm-pin-active {
          z-index: 5;
          box-shadow: 0 7px 20px rgba(0, 48, 64, .3);
          transform: translate(-50%, -50%) scale(1.13);
        }

        .lsm-pin span {
          font-size: 11px;
          font-weight: 900;
        }

        .lsm-map-legend {
          position: absolute;
          right: 12px;
          bottom: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding: 10px 12px;
          border: 1px solid rgba(255,255,255,.8);
          border-radius: 10px;
          background: rgba(255,255,255,.94);
          box-shadow: 0 3px 12px rgba(0,0,0,.05);
        }

        .lsm-map-legend > span {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #45586b;
          font-size: 9px;
          font-weight: 700;
        }

        .lsm-map-legend i,
        .lsm-location-dot {
          display: inline-block;
          flex-shrink: 0;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .lsm-map-control {
          position: absolute;
          top: 12px;
          right: 12px;
          display: grid;
          place-items: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: white;
          color: #00566a;
          box-shadow: 0 3px 12px rgba(0,0,0,.08);
        }

        .lsm-selected-location {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 17px;
          padding: 15px;
          border: 1px solid #e5edf1;
          border-radius: 13px;
          background: #fbfdfe;
        }

        .lsm-location-info {
          min-width: 0;
          flex: 1;
        }

        .lsm-location-info > span,
        .lsm-rank-value > span {
          display: block;
          color: #7b8a9c;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .7px;
        }

        .lsm-location-info h4 {
          overflow-wrap: anywhere;
          margin: 5px 0 0;
          font-size: 13px;
          font-weight: 800;
        }

        .lsm-rank-value {
          text-align: right;
        }

        .lsm-rank-value strong {
          display: block;
          margin-top: 3px;
          font-size: 25px;
        }

        .lsm-info-panel {
          display: flex;
          flex-direction: column;
        }

        .lsm-info-heading {
          gap: 13px;
        }

        .lsm-info-icon {
          width: 48px;
          height: 48px;
        }

        .lsm-info-description {
          margin: 21px 0;
          color: #637287;
          font-size: 13px;
          line-height: 1.85;
        }

        .lsm-view-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5px;
          padding: 5px;
          border-radius: 10px;
          background: #f0f5f7;
        }

        .lsm-view-toggle button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 11px 6px;
          border: 0;
          border-radius: 8px;
          background: transparent;
          color: #637287;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
        }

        .lsm-view-toggle button.active {
          background: #ffffff;
          color: #00566a;
          box-shadow: 0 2px 8px rgba(10, 40, 60, .08);
        }

        .lsm-metric-card {
          margin-top: 15px;
          padding: 19px;
          border: 1px solid #dcebed;
          border-radius: 15px;
          background: linear-gradient(140deg, #f0faf9, #f8fcff);
        }

        .lsm-metric-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          color: #52677a;
          font-size: 11px;
          font-weight: 700;
        }

        .lsm-metric-top svg {
          color: #008a8e;
        }

        .lsm-metric-number {
          margin: 16px 0;
          color: #00566a;
          font-size: 35px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .lsm-metric-number > span {
          color: #708096;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0;
        }

        .lsm-progress {
          height: 7px;
          overflow: hidden;
          border-radius: 10px;
          background: #dce9eb;
        }

        .lsm-progress > span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #00b88a, #00a8cb);
          transition: width .3s ease;
        }

        .lsm-metric-card > small {
          display: block;
          margin-top: 12px;
          color: #8493a3;
          font-size: 9px;
        }

        .lsm-coverage-note {
          margin: 0;
          color: #627488;
          font-size: 12px;
          line-height: 1.8;
        }

        .lsm-location-list {
          margin-top: 23px;
        }

        .lsm-location-list > h4 {
          margin: 0 0 12px;
          font-size: 13px;
          font-weight: 850;
        }

        .lsm-location-row {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 12px 9px;
          border: 0;
          border-bottom: 1px solid #edf1f4;
          background: transparent;
          text-align: left;
          cursor: pointer;
          transition: background .2s ease;
        }

        .lsm-location-row:hover,
        .lsm-location-row.selected {
          border-radius: 8px;
          background: #f0f8f9;
        }

        .lsm-row-name {
          flex: 1;
          color: #34465c;
          font-size: 11px;
          font-weight: 700;
        }

        .lsm-row-rank {
          font-size: 12px;
          font-weight: 900;
        }

        .lsm-location-row > svg {
          color: #8b9aab;
        }

        .lsm-insight {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin-top: auto;
          padding: 15px 12px 0;
          color: #008c78;
        }

        .lsm-insight > svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .lsm-insight p {
          margin: 0;
          color: #637287;
          font-size: 11px;
          line-height: 1.8;
        }

        .lsm-insight strong {
          color: #00566a;
          font-size: 12px;
        }

        .lsm-benefits {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 24px;
        }

        .lsm-benefits > div {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 21px;
          border: 1px solid #e0eaf0;
          border-radius: 16px;
          background: #ffffff;
        }

        .lsm-benefit-icon {
          width: 42px;
          height: 42px;
        }

        .lsm-benefits h4 {
          margin: 0 0 6px;
          font-size: 13px;
          font-weight: 850;
        }

        .lsm-benefits p {
          margin: 0;
          color: #748398;
          font-size: 11px;
          line-height: 1.7;
        }

        @media (max-width: 950px) {
          .lsm-section {
            padding: 75px 20px;
          }

          .lsm-dashboard {
            grid-template-columns: 1fr;
          }

          .lsm-info-panel {
            min-height: 0;
          }

          .lsm-insight {
            margin-top: 22px;
          }
        }

        @media (max-width: 600px) {
          .lsm-section {
            padding: 60px 15px;
          }

          .lsm-heading {
            margin-bottom: 35px;
          }

          .lsm-heading h2 {
            letter-spacing: -1px;
          }

          .lsm-heading > p {
            font-size: 14px;
          }

          .lsm-map-panel,
          .lsm-info-panel {
            padding: 15px;
            border-radius: 17px;
          }

          .lsm-panel-title h3,
          .lsm-info-heading h3 {
            font-size: 14px;
          }

          .lsm-live-badge {
            padding: 7px;
            font-size: 8px;
          }

          .lsm-map {
            height: 310px;
          }

          .lsm-map-legend {
            right: 7px;
            bottom: 7px;
            gap: 7px;
            padding: 8px;
          }

          .lsm-map-legend > span {
            font-size: 8px;
          }

          .lsm-benefits {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .lsm-benefits > div {
            padding: 17px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lsm-pin,
          .lsm-location-row,
          .lsm-progress > span {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default LocalSeoMapVisualization;
