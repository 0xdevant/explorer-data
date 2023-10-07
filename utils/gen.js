import yaml from "npm:js-yaml";

import { W3PData } from "./w3pdata.js";

const w3pd = new W3PData();
await w3pd.init();

function slugify(input) {
  if (!input) {
    return "";
  }

  // make lower case and trim
  var slug = input.toLowerCase().trim();

  // remove accents from charaters
  slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // replace invalid chars with spaces
  slug = slug.replace(/[^a-z0-9\s-]/g, " ").trim();

  // replace multiple spaces or hyphens with a single hyphen
  slug = slug.replace(/[\s-]+/g, "-");

  return slug;
}

const projectDir = "src/projects";

async function genCat(cat) {
  const catDir = `${projectDir}/${cat}`;
  const f = await Deno.readTextFile(`${catDir}/src.json`);
  const src = JSON.parse(f);

  for (const p of src.data.Projects) {
    const id = slugify(p.Project);

    // try to find
    const found = w3pd.data.projects.find(p => p.id === id)
    const baseObject = found || {}

    const pDir = `${catDir}/${id}`;
    console.log(`${id}:\n  -> ${pDir}`);

    try {
      await Deno.mkdir(pDir);
    } catch {}

    const out = Object.assign(baseObject, {
      name: p.Project,
      categories: [cat],
      description: p.Description,
      ecosystem: p.Ecosystem !== '-' ? p.Ecosystem : undefined,
      product_readiness: p.ProductReadiness !== '-' ? p.ProductReadiness : undefined,
      links: Object.assign(baseObject.links || {}, {
        web: p.ProjectLink,
        github: p.GitHub && p.GitHub !== '-' ? p.GitHub : undefined,
        docs: p.Docs && p.Docs !== '-' ? p.Docs : undefined,
      }),
      team: Object.assign({}, baseObject.team || {}),
    });
    if (p.Team === "anon" || p.Team === 'Public') {
      out.team.anonymous = p.Team === "anon" ? true : false
    }
    if (p.TeamLink && p.TeamLink !== '-') {
      out.team.company = { link: p.TeamLink !== '-' ? p.TeamLink : undefined }
    }
    if (Object.keys(out.team).length === 0) {
      delete out.team
    }
    if (p.Token) {
      out.have_token = true
      if (p.TokenLink) {
        out.token_link = p.TokenLink !== '-' ? p.TokenLink : undefined
      }
    }
    delete out.id
    const yml = yaml.dump(out);
    await Deno.writeTextFile(`${pDir}/index.yaml`, yml);
    //console.log(id, yml)
  }
}

genCat(Deno.args[0]);
