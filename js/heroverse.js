(() => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.site-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      menu.classList.toggle('is-open', !open);
    });
  }

  const cards = [...document.querySelectorAll('.character-card')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  const status = document.querySelector('.filter-status');
  filters.forEach(button => button.addEventListener('click', () => {
    const value = button.dataset.filter;
    filters.forEach(item => { item.classList.toggle('is-active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
    let shown = 0;
    cards.forEach(card => {
      const match = value === 'all' || card.dataset.publisher === value || card.dataset.alignment === value;
      card.hidden = !match;
      if (match) shown += 1;
    });
    if (status) status.textContent = `Showing ${shown} ${shown === 1 ? 'profile' : 'profiles'} for ${button.textContent.trim()}.`;
  }));

  const dialog = document.querySelector('#profile-dialog');
  let lastTrigger = null;
  if (dialog) {
    const fields = {
      title: dialog.querySelector('#profile-title'), meta: dialog.querySelector('#profile-meta'), identity: dialog.querySelector('#profile-identity'),
      role: dialog.querySelector('#profile-role'), ability: dialog.querySelector('#profile-ability'), bio: dialog.querySelector('#profile-bio'), source: dialog.querySelector('#profile-source')
    };
    document.querySelectorAll('[data-profile]').forEach(button => button.addEventListener('click', () => {
      const profile = JSON.parse(button.dataset.profile);
      lastTrigger = button; fields.title.textContent = profile.name; fields.meta.textContent = `${profile.publisher} / ${profile.role}`;
      fields.identity.textContent = profile.identity; fields.role.textContent = profile.role; fields.ability.textContent = profile.ability;
      fields.bio.textContent = profile.bio; fields.source.href = profile.source; dialog.showModal(); dialog.querySelector('.dialog-close').focus();
    }));
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('keydown', event => { if (event.key === 'Escape' && dialog.open) { event.preventDefault(); dialog.close(); } });
    dialog.addEventListener('close', () => lastTrigger?.focus());
  }

  const characterNames = {"spider-man":"Spider-Man","thor":"Thor","iron-man":"Iron Man","hulk":"Hulk","doctor-strange":"Doctor Strange","green-arrow":"Green Arrow","loki":"Loki","thanos":"Thanos"};
  const themes = {trust:"must decide whether to trust a warning that cannot be verified",power:"compare what responsibility means when their powers create unequal risks",strategy:"face a conflict where careful planning matters more than raw strength",identity:"protect a secret identity without sacrificing an innocent bystander"};
  const matchup = document.querySelector('#matchup-form');
  if (matchup) matchup.addEventListener('submit', event => {
    event.preventDefault(); const a = document.querySelector('#fighter-a').value; const b = document.querySelector('#fighter-b').value; const theme = document.querySelector('#theme').value; const output = document.querySelector('#matchup-output');
    if (a === b) { output.innerHTML = '<span class="issue-tag">Choose two profiles</span><h2>A matchup needs different characters.</h2><p>Select another second character. Nothing has been transmitted.</p>'; return; }
    output.innerHTML = `<span class="issue-tag">Non-canon fan prompt</span><h2>${characterNames[a]} + ${characterNames[b]}</h2><p>During a citywide archive failure, ${characterNames[a]} and ${characterNames[b]} ${themes[theme]}. Write three choices they could make and explain which choice best reflects each character's values.</p><small>Generated locally from fixed classroom templates - not publisher canon and not remote AI.</small>`;
  });

  document.querySelectorAll('[data-vote]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-vote]').forEach(item => item.classList.toggle('is-selected', item === button));
    document.querySelector('#vote-status').textContent = `Selected: ${button.dataset.vote}. This preference remains local and is not stored.`;
  }));

  const contact = document.querySelector('#contact-form');
  if (contact) contact.addEventListener('submit', event => {
    event.preventDefault(); const formStatus = document.querySelector('#form-status');
    if (!contact.checkValidity()) { contact.reportValidity(); formStatus.textContent = 'Please complete the required fields. Nothing has been sent.'; return; }
    formStatus.textContent = 'Validation complete. This static demonstration did not send, save or email your message.'; contact.reset();
  });
})();
