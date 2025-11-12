import {
  bio,
  skills,
  education,
  experience,
  footer,
  contactLinks,
} from "./user-data/data.js";
import { html, render } from "https://unpkg.com/lit-html?module";
import { unsafeHTML } from "https://unpkg.com/lit-html/directives/unsafe-html.js?module";
import { marked } from "https://cdn.jsdelivr.net/npm/marked@5.1.1/lib/marked.esm.js";

import { URLs, GITHUB_USERNAME } from "./user-data/urls.js";

const { medium, gitConnected, gitRepo } = URLs;


async function fetchReposFromGit(url) {
  try {
    const response = await fetch(url);
    const items = await response.json();
    populateRepo(items, "repos");
  } catch (error) {
    throw new Error(`Error in fetching the blogs from repos: ${error}`);
  }
}

async function fetchGitConnectedData(url) {
  try {
    const response = await fetch(url);
    const { basics } = await response.json();
    mapBasicResponse(basics);
  } catch (error) {
    throw new Error(`Error in fetching the blogs from git connected: ${error}`);
  }
}

function mapBasicResponse(basics) {
  const {
    name,
    label,
    image,
    email,
    phone,
    url,
    summary,
    profiles,
    headline,
    blog,
    yearsOfExperience,
    username,
    locationAsString,
    region,
    karma,
    id,
    followers,
    following,
    picture,
    website,
  } = basics;

  window.parent.document.title = name;
}

function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  // If the bio items contain HTML, render them as HTML using unsafeHTML.
  const bioTemplate = html`
    ${items.map((bioItem) => {
      const looksLikeHtml = /<[^>]+>/.test(bioItem);
      return looksLikeHtml
        ? html`${unsafeHTML(bioItem)}`
        : html`<p>${bioItem}</p>`;
    })}
  `;
  render(bioTemplate, bioTag);
}

function populateSkills(items, id) {
  const skillsTag = document.getElementById(id);

  const skillsTemplate = html` ${items.map(
    (item) => html` <div class="col-md-3 animate-box">
      <div class="progress-wrap">
        <li class="skill-item">${item}</li>
      </div>
    </div>`
  )}`;
  render(skillsTemplate, skillsTag);
}


function populateRepo(items, id) {
  const projectdesign = document.getElementById(id);
  if (!projectdesign || !items?.length) return;

  const statsTemplate = (item) => html`
    <div class="stats-row">
      <div class="language-div">
        <span class="language-dot"></span>
        ${item.language}
      </div>
      <div class="stats-div">
        <img
          src="https://img.icons8.com/ios-filled/16/666666/star--v1.png"
          alt="Stars"
        />
        ${item.stars}
      </div>
      <div class="stats-div">
        <img
          src="https://img.icons8.com/ios-filled/16/666666/code-fork.png"
          alt="Forks"
        />
        ${item.forks}
      </div>
    </div>
  `;

  const repoTemplate = html`
    <div class="repo-wrapper">
      ${items.slice(0, 4).map(
        (item) => html`
          <div class="repo-card">
            <a
              href="https://github.com/${item.author}/${item.name}"
              target="_blank"
              class="repo-link"
            >
              <p class="repo-heading">${item.name}</p>
              <p class="repo-description">${item.description}</p>
              ${statsTemplate(item)}
            </a>
          </div>
        `
      )}
    </div>
  `;

  render(repoTemplate, projectdesign);
}

function populateExp_Edu(items, id) {
  const mainContainer = document.getElementById(id);
  if (!mainContainer || !items?.length) return;

  const detailsTemplate = (details) => html`
    ${details.map((detail) => {
      const urlMatch = (detail || "").match(/https?:\/\/\S+/);
      if (urlMatch) {
        const url = urlMatch[0];
        const text = detail.replace(url, "").trim();
        return html` <p class="timeline-text">&blacksquare; ${text} <a href="${url}" target="_blank" rel="noopener">${url}</a></p> `;
      }
      return html` <p class="timeline-text">&blacksquare; ${detail}</p> `;
    })}
  `;

  const tagsTemplate = (tags) => html`
    <div class="tags-container">
      ${tags.map((tag) => html`<div class="profile-badge brown-badge">${tag}</div>`)}
    </div>
  `;

  const timelineTemplate = html`
    ${items.map(
      (item) => html`
        <article class="timeline-entry animate-box">
          <div class="timeline-entry-inner">
            <div class="timeline-icon color-2">
              <i class="fa fa-${item.icon}"></i>
            </div>
            <div class="timeline-label">
              <div class="exp-heading">
                <p class="blog-heading">${item.title}</p>
                <span class="publish-date">${item.duration}</span>
              </div>
              <span class="timeline-sublabel">${item.subtitle}</span>
              ${detailsTemplate(item.details)} ${tagsTemplate(item.tags)}
            </div>
          </div>
        </article>
      `
    )}
    <article class="timeline-entry begin animate-box">
      <div class="timeline-entry-inner">
        <div class="timeline-icon color-2"></div>
      </div>
    </article>
  `;

  render(timelineTemplate, mainContainer);
}

function populateLinks(items, id) {
  const footer = document.getElementById(id);
  if (!footer || !items?.length) return;

  const linkTemplate = (data) => html`
    <li>
      <a
        href="${data.link || "#"}"
        @click="${data.func || null}"
      >
        ${data.text}
      </a>
    </li>
  `;

  const columnTemplate = (item) => html`
    <span class="col">
      <p class="col-title">${item.label}</p>
      <nav class="col-list">
        <ul>
          ${item.data.map((data) => linkTemplate(data))}
        </ul>
      </nav>
    </span>
  `;

  const copyrightTemplate = (item) => html`
    <div class="copyright-text no-print">
      ${item.data.map((copyright) => html`<p>${copyright}</p>`)}
    </div>
  `;

  const footerTemplate = html`
    ${items.map(
      (item) => html`
        ${item.label === "copyright-text"
          ? copyrightTemplate(item)
          : columnTemplate(item)}
      `
    )}
  `;

  render(footerTemplate, footer);
}

function populateContactLinks(items, id) {
  const contactLinks = document.getElementById(id);
  if (!contactLinks || !items?.length) return;
  const contactLinkTemplate = (item) => html`
    <li class="profile-card" style="padding: 6px 12px">
      <a href="${item.link}" target="_blank" class="contact-link">
        <i class="${item.icon}"></i>
        <span class="contact-label">${item.label}</span>
      </a>
    </li>
  `;
  const contactLinksTemplate = html`
    <ul class="contact-links-list">
      ${items.map((item) => contactLinkTemplate(item))}
    </ul>
  `;
  render(contactLinksTemplate, contactLinks);
}

function getElement(tagName, className) {
  let item = document.createElement(tagName);
  item.className = className;
  return item;
}

function getBlogDate(publishDate) {
  const elapsed = Date.now() - Date.parse(publishDate);

  // Time conversions in milliseconds
  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  if (elapsed < msPerMinute) {
    const seconds = Math.floor(elapsed / msPerSecond);
    return `${seconds} seconds ago`;
  } else if (elapsed < msPerHour) {
    const minutes = Math.floor(elapsed / msPerMinute);
    return `${minutes} minutes ago`;
  } else if (elapsed < msPerDay) {
    const hours = Math.floor(elapsed / msPerHour);
    return `${hours} hours ago`;
  } else if (elapsed < msPerMonth) {
    const days = Math.floor(elapsed / msPerDay);
    return days == 1 ? `${days} day ago` : `${days} days ago`;
  } else if (elapsed < msPerYear) {
    const months = Math.floor(elapsed / msPerMonth);
    return months == 1 ? `${months} month ago` : `${months} months ago`;
  } else {
    const years = Math.floor(elapsed / msPerYear);
    return years == 1 ? `${years} year ago` : `${years} years ago`;
  }
}

populateBio(bio, "bio");


populateSkills(skills, "skills");
// set profile image from GitHub avatar (if available)
async function fetchGitHubProfile(username) {
  if (!username) return;
  try {
    console.log("fetchGitHubProfile: fetching GitHub profile for", username);
    const resp = await fetch(`https://api.github.com/users/${username}`);
    if (!resp.ok) {
      console.warn("fetchGitHubProfile: GitHub API responded with status", resp.status);
      return;
    }
    const data = await resp.json();
    console.log("fetchGitHubProfile: received data", data);
    // set avatar if available
    if (data?.avatar_url) {
      const img = document.getElementById("profile-img");
      if (img) img.src = data.avatar_url;
    }
    // if GitHub profile has a bio, use it to replace the current bio display
    if (data?.bio) {
      // populateBio is defined earlier and will replace the #bio content
      try {
        // include a small source note so it's visually clear the bio is coming from GitHub
        populateBio([data.bio, "(source: GitHub)"], "bio");
      } catch (e) {
        // silent fail if populateBio is not available
      }
    }
  } catch (e) {
    console.error("fetchGitHubProfile: error fetching GitHub profile", e);
  }
}

fetchGitHubProfile(GITHUB_USERNAME);
// attempt to fetch the profile README (repo named same as username) and render it as the About section
async function fetchProfileReadme(username) {
  if (!username) return;
  try {
    console.log("fetchProfileReadme: fetching README for", username);
    const tryUrl = (branch) => `https://raw.githubusercontent.com/${username}/${username}/${branch}/README.md`;
    let resp = await fetch(tryUrl("main"));
    if (!resp.ok) {
      resp = await fetch(tryUrl("master"));
      if (!resp.ok) {
        console.warn("fetchProfileReadme: README not found on main or master");
        return;
      }
    }
    const md = await resp.text();
    // convert markdown to HTML and render it into the bio area
    const htmlContent = marked.parse(md || "");
    populateBio([htmlContent], "bio");
    console.log("fetchProfileReadme: README rendered into About section");
  } catch (e) {
    console.error("fetchProfileReadme: error fetching README", e);
  }
}

fetchProfileReadme(GITHUB_USERNAME);

fetchReposFromGit(gitRepo);
fetchGitConnectedData(gitConnected);

populateExp_Edu(experience, "experience");
populateExp_Edu(education, "education");

populateLinks(footer, "footer");
populateContactLinks(contactLinks, 'contact-links');
