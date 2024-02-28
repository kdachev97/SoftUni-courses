import { showCatalog } from './catalog.js';
import { showCreate } from './create.js';
import { showUpdatate } from './update.js';
import { render } from './utility.js';

const root = document.body;

const ctx = {
  update
};

update();

function update() {
  render([
    showCatalog(ctx),
    showCreate(ctx),
    showUpdatate(ctx)
  ], root);
}
