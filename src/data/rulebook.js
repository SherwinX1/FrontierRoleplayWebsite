// Full text content for the /rules page. Kept separate from the Rulebook component so the
// rules can be edited without touching any rendering/interaction logic.

export const RULEBOOK_INTRO = {
  eyebrow: 'Frontier Roleplay',
  title: 'Roleplay Rulebook',
  tagline: 'Story comes first.',
  paragraphs: [
    'Frontier Roleplay is a serious, player-driven RedM roleplay server set in the late 1800s.',
    'Our rules exist to protect the quality of roleplay, not to dictate every decision a character can make.',
    'Players are expected to use common sense, respect the setting, and understand that sometimes the best roleplay comes from losing.',
  ],
}

// Each rule: number, title, a summary shown up front, and optional `details` blocks
// ({ type: 'p', text } or { type: 'ul', items }) revealed behind "Show details".
// Factions / Crime Rules / Posse & Group Limits are ordered last (before the closing
// Frontier Standard section) by request.
export const RULEBOOK_SECTIONS = [
  {
    number: 'I',
    id: 'general-server-rules',
    title: 'General Server Rules',
    rules: [
      {
        number: 1,
        title: 'Respect the Server and Its Players',
        summary: 'Treat other players, staff, and the community with respect.',
        details: [
          {
            type: 'p',
            text: "Character conflict is encouraged when it creates meaningful RP. Personal harassment, OOC hostility, discrimination, threats, or attempts to ruin another player's experience are not considered roleplay.",
          },
          {
            type: 'p',
            text: 'Your character can hate another character. You cannot use that as an excuse to attack the person behind the character.',
          },
        ],
      },
      {
        number: 2,
        title: 'Story Comes First',
        summary: 'The purpose of Frontier Roleplay is to create stories.',
        details: [
          { type: 'p', text: 'Money, items, property, weapons, kills, jobs, and progression are secondary to the story surrounding them.' },
          { type: 'p', text: 'Do not sacrifice good roleplay simply to obtain a reward.' },
          { type: 'p', text: 'If losing a gun, horse, business deal, fight, or criminal operation creates a better story, allow the story to happen.' },
          { type: 'p', text: 'You do not always need to win.' },
        ],
      },
      {
        number: 3,
        title: 'Roleplay in Good Faith',
        summary: 'Rules should never be treated as a list of loopholes.',
        details: [
          { type: 'p', text: "If something is technically possible but clearly damages the roleplay environment, don't do it." },
          { type: 'p', text: 'Players are expected to act in good faith even when a specific situation is not explicitly covered by the rules.' },
        ],
      },
      {
        number: 4,
        title: 'No Metagaming',
        summary: 'Do not use information your character did not obtain through roleplay.',
        details: [
          { type: 'p', text: 'This includes information from:' },
          {
            type: 'ul',
            items: [
              'Discord',
              'Streams',
              'Videos',
              'Screenshots',
              'Watching another player',
              'OOC conversations',
              'Character names displayed by the game',
              "Other characters' private information",
            ],
          },
          { type: 'p', text: 'If you know something but your character does not, your character does not know it.' },
        ],
      },
      {
        number: 5,
        title: 'No Powergaming',
        summary: "Do not force an outcome onto another player's character.",
        details: [
          { type: 'p', text: 'You may describe what your character attempts to do.' },
          { type: 'p', text: 'You should not decide what another character automatically does, feels, says, or suffers.' },
          { type: 'p', text: 'Give people something to respond to.' },
        ],
      },
      {
        number: 6,
        title: 'No Exploiting',
        summary: 'Exploiting bugs, unintended mechanics, duplication glitches, script vulnerabilities, economy exploits, or other technical issues is prohibited.',
        details: [
          { type: 'p', text: 'If you discover a serious exploit, report it to staff.' },
          { type: 'p', text: 'Do not distribute or demonstrate an exploit to other players.' },
        ],
      },
    ],
  },
  {
    number: 'II',
    id: 'character-and-world-rules',
    title: 'Character & World Rules',
    rules: [
      {
        number: 7,
        title: 'Your Character Is a Character',
        summary: 'Characters should have believable:',
        details: [
          { type: 'ul', items: ['Backgrounds', 'Personalities', 'Motivations', 'Strengths', 'Weaknesses', 'Goals', 'Relationships'] },
          { type: 'p', text: 'Your character does not need to be extraordinary.' },
          { type: 'p', text: 'In fact, starting small is encouraged.' },
        ],
      },
      {
        number: 8,
        title: 'Start Small',
        summary: 'Not every character needs to arrive in the frontier as:',
        details: [
          {
            type: 'ul',
            items: ['A famous gunslinger', 'A wealthy businessman', 'A powerful outlaw', 'A legendary lawman', 'A gang leader', 'A political figure'],
          },
          { type: 'p', text: 'Build your character over time.' },
          { type: 'p', text: 'A person who starts with nothing and gradually develops a reputation gives themselves more opportunities for RP.' },
        ],
      },
      {
        number: 9,
        title: 'Character Development Takes Time',
        summary: 'Relationships, wealth, influence, reputation, businesses, criminal organizations, and political power should develop naturally.',
        details: [
          { type: 'p', text: 'Do not expect your character to become important simply because you created them.' },
          { type: 'p', text: 'Earn your place in the world through RP.' },
        ],
      },
      {
        number: 10,
        title: 'Period-Appropriate Behavior',
        summary: 'Frontier Roleplay takes place in the late 1800s. Characters should generally behave in ways appropriate to the setting.',
        details: [
          { type: 'p', text: "Consider the period's:" },
          { type: 'ul', items: ['Technology', 'Communication', 'Medicine', 'Transportation', 'Social structures', 'Law', 'Economy', 'Weapons'] },
          { type: 'p', text: 'You do not need to be a historian.' },
          { type: 'p', text: 'Use reasonable judgment.' },
        ],
      },
      {
        number: 11,
        title: 'Unrealistic Behavior',
        summary: 'Avoid behavior that exists purely because the game allows it.',
        details: [
          {
            type: 'ul',
            items: [
              'Treating serious injuries as meaningless',
              'Ignoring obvious danger',
              "Repeatedly surviving situations that should realistically end your character's life",
              'Using modern knowledge or behavior that has no place in the setting',
              'Performing actions that would obviously be impossible',
            ],
          },
        ],
      },
    ],
  },
  {
    number: 'III',
    id: 'character-life-and-death',
    title: 'Character Life & Death',
    rules: [
      {
        number: 12,
        title: 'Value Your Life',
        summary: "Your character's life should have value.",
        details: [
          { type: 'p', text: 'This does not mean you must surrender every time someone points a gun at you.' },
          { type: 'p', text: 'Fear, bravery, desperation, revenge, and foolishness are all legitimate character traits.' },
          { type: 'p', text: 'However, repeatedly treating death as meaningless is not acceptable.' },
        ],
      },
      {
        number: 13,
        title: 'Injury Roleplay',
        summary: 'Injuries should matter.',
        details: [
          { type: 'p', text: 'A character who has been:' },
          { type: 'ul', items: ['Shot', 'Stabbed', 'Beaten', 'Trampled', 'Thrown from a horse', 'Seriously injured'] },
          { type: 'p', text: 'should not immediately behave as if nothing happened.' },
          { type: 'p', text: 'Allow injuries to create roleplay.' },
        ],
      },
      {
        number: 14,
        title: 'Death RP',
        summary: 'Death should be treated as a significant event.',
        details: [
          { type: 'p', text: 'Players should not casually kill characters simply because they lost an argument or confrontation.' },
          {
            type: 'p',
            text: "Likewise, players should not casually treat their own character's death as meaningless when the situation reasonably warrants permanent consequences.",
          },
          { type: 'p', text: 'Staff may become involved in disputed permanent-death situations.' },
        ],
      },
    ],
  },
  {
    number: 'IV',
    id: 'combat-rules',
    title: 'Combat Rules',
    rules: [
      {
        number: 15,
        title: 'Combat Should Have Context',
        summary: 'Violence should have a reason.',
        details: [
          { type: 'p', text: 'A gunfight should not happen simply because two players wanted to test their weapons.' },
          { type: 'p', text: 'Conflict should develop naturally from the story whenever possible.' },
        ],
      },
      {
        number: 16,
        title: 'No RDM',
        summary: 'Random Deathmatch is prohibited.',
        details: [
          { type: 'p', text: 'Killing another character without sufficient RP justification is not acceptable.' },
          { type: 'p', text: 'A disagreement, insult, inconvenience, or minor argument does not automatically justify killing someone.' },
        ],
      },
      {
        number: 17,
        title: 'No Baiting',
        summary: 'Do not intentionally provoke another player into committing violence simply so you can retaliate or gain an advantage.',
        details: [
          { type: 'p', text: 'Examples:' },
          {
            type: 'ul',
            items: [
              'Repeatedly insulting someone just to start a gunfight',
              "Walking into someone's camp purely to provoke them",
              'Deliberately antagonizing lawmen so they chase you',
              "Using another player's rules knowledge against them to force a confrontation",
            ],
          },
          { type: 'p', text: 'Create conflict through RP, not loopholes.' },
        ],
      },
      {
        number: 18,
        title: 'No Repeat Killing',
        summary: 'Do not repeatedly kill, attack, or target the same player without a meaningful reason.',
        details: [
          { type: 'p', text: 'A conflict should progress.' },
          { type: 'p', text: 'If two characters repeatedly kill each other without developing the story, staff may intervene.' },
        ],
      },
      {
        number: 19,
        title: 'Shootout Etiquette',
        summary: 'Once a shootout begins, players should avoid turning it into an unrealistic combat simulation.',
        details: [
          { type: 'p', text: 'Do not:' },
          {
            type: 'ul',
            items: [
              'Abuse animations',
              'Abuse game mechanics',
              'Ignore injuries',
              'Repeatedly return immediately after being killed',
              'Use OOC information to gain an advantage',
              'Continue combat solely to "win"',
            ],
          },
        ],
      },
    ],
  },
  {
    number: 'V',
    id: 'property-and-business',
    title: 'Property & Business',
    rules: [
      {
        number: 20,
        title: 'Property Exists to Create RP',
        summary: 'Owning a property or business should create opportunities for interaction.',
        details: [{ type: 'p', text: 'Businesses should not become private money generators that nobody interacts with.' }],
      },
      {
        number: 21,
        title: 'Business Roleplay',
        summary: 'Business owners should encourage:',
        details: [
          { type: 'ul', items: ['Customers', 'Employees', 'Competitors', 'Suppliers', 'Negotiations', 'Events', 'Community interaction'] },
          { type: 'p', text: 'A business should contribute to the world.' },
        ],
      },
      {
        number: 22,
        title: 'No Asset Transfer Abuse',
        summary:
          'Do not transfer money, property, horses, weapons, businesses, or other valuable assets between characters simply to bypass restrictions, avoid consequences, or move wealth between characters.',
        details: [{ type: 'p', text: 'Asset transfers should make sense within RP and server rules.' }],
      },
    ],
  },
  {
    number: 'VI',
    id: 'server-and-game-world-health',
    title: 'Server & Game World Health',
    rules: [
      {
        number: 23,
        title: 'Protect the World',
        summary: 'Players should help maintain a believable and enjoyable world.',
        details: [
          { type: 'p', text: 'Do not intentionally:' },
          {
            type: 'ul',
            items: [
              'Destroy public events',
              'Interrupt unrelated RP',
              'Abuse NPCs for entertainment',
              'Cause unnecessary server-wide disruption',
              'Exploit mechanics to damage the economy',
              'Create excessive chaos',
            ],
          },
        ],
      },
      {
        number: 24,
        title: 'Do Not Abuse Game Mechanics',
        summary: 'Game mechanics are tools.',
        details: [
          { type: 'p', text: 'If a mechanic produces an outcome that clearly breaks the intended RP, do not abuse it.' },
          { type: 'p', text: 'Report broken mechanics instead.' },
        ],
      },
    ],
  },
  {
    number: 'VII',
    id: 'rp-pacing',
    title: 'RP Pacing',
    rules: [
      {
        number: 25,
        title: 'Let Stories Breathe',
        summary: 'Not every interaction needs to become a major event.',
        details: [
          { type: 'p', text: 'Allow stories to develop.' },
          { type: 'p', text: 'A meeting today might become a friendship next week.' },
          { type: 'p', text: 'A disagreement might become a rivalry.' },
          { type: 'p', text: 'A business transaction might become a partnership.' },
          { type: 'p', text: 'A small crime might eventually become a major investigation.' },
          { type: 'p', text: 'Do not rush every story toward its biggest possible outcome.' },
        ],
      },
      {
        number: 26,
        title: 'Story Over Profit',
        summary: 'If you have to choose between making money and creating a better story, consider the story.',
        details: [
          { type: 'p', text: 'Money can be earned again.' },
          { type: 'p', text: 'A memorable RP scene cannot always be recreated.' },
        ],
      },
    ],
  },
  {
    number: 'VIII',
    id: 'ooc-and-community',
    title: 'OOC & Community',
    rules: [
      {
        number: 27,
        title: 'Keep OOC Separate',
        summary: 'OOC information should not influence your character.',
        details: [{ type: 'p', text: 'If you need to discuss a technical or community issue, step outside the RP.' }],
      },
      {
        number: 28,
        title: 'Do Not Weaponize Reports',
        summary: 'Reports should not be used simply because you disliked the outcome of an RP situation.',
        details: [
          { type: 'p', text: 'A report should generally concern:' },
          {
            type: 'ul',
            items: ['Rule violations', 'Exploits', 'Serious harassment', 'Technical abuse', 'Situations that genuinely require staff intervention'],
          },
        ],
      },
      {
        number: 29,
        title: 'Staff Decisions',
        summary: 'Staff may intervene when a situation is damaging the server or when the rules have been violated.',
        details: [
          { type: 'p', text: 'Staff decisions should be respected while an issue is being reviewed.' },
          { type: 'p', text: 'Disagreements can be discussed through the appropriate channels rather than being brought into active RP.' },
        ],
      },
    ],
  },
  {
    number: 'IX',
    id: 'factions',
    title: 'Factions',
    intro: 'This should be a completely separate section from general crime.',
    rules: [
      {
        number: 30,
        title: 'Factions Exist to Create Stories',
        summary: 'Factions are not created simply to become the strongest group on the server.',
        details: [
          { type: 'p', text: 'A faction should have:' },
          { type: 'ul', items: ['Identity', 'Leadership', 'Goals', 'Internal relationships', 'External relationships', 'Strengths', 'Weaknesses'] },
        ],
      },
      {
        number: 31,
        title: 'Faction Growth',
        summary: 'Start small. Do not immediately create a massive organization with unlimited influence.',
        details: [
          { type: 'p', text: 'Build your faction through roleplay.' },
          { type: 'p', text: 'Reputation should come from what your characters actually do.' },
        ],
      },
      {
        number: 32,
        title: 'Faction Conflict',
        summary: 'Faction conflict should have a reason.',
        details: [
          { type: 'p', text: 'Examples:' },
          {
            type: 'ul',
            items: ['Territory', 'Business competition', 'Personal history', 'Political disagreement', 'Criminal disputes', 'Family conflict', 'Resource competition'],
          },
          { type: 'p', text: 'Do not create permanent wars simply because another faction exists.' },
        ],
      },
      {
        number: 33,
        title: 'Faction Wars Should Have an End',
        summary: 'Conflict should progress toward something.',
        details: [
          { type: 'p', text: 'A faction war should not become: fight → respawn → fight → repeat.' },
          { type: 'p', text: 'There should eventually be opportunities for:' },
          { type: 'ul', items: ['Negotiation', 'Revenge', 'Surrender', 'Peace', 'Alliance', 'Betrayal', 'Escalation'] },
        ],
      },
      {
        number: 34,
        title: 'No Faction Monopoly',
        summary: 'No faction should attempt to control every aspect of the server.',
        details: [
          {
            type: 'p',
            text: 'Law enforcement, businesses, criminal groups, ranches, political groups, and civilian organizations should all have room to exist.',
          },
        ],
      },
      {
        number: 35,
        title: 'Faction Membership',
        summary: 'Faction leaders are responsible for the behavior of their organization.',
        details: [{ type: 'p', text: 'Repeated rule violations by members may result in consequences for the faction itself.' }],
      },
    ],
  },
  {
    number: 'X',
    id: 'crime-rules',
    title: 'Crime Rules',
    intro: 'Crime will have its own rule section because criminal RP can create some of the most important stories in the server.',
    rules: [
      {
        number: 36,
        title: 'Crime Should Create RP',
        summary: 'Crime is not simply a method of making money.',
        details: [
          { type: 'p', text: 'Robberies, theft, kidnapping, smuggling, murder, extortion, and other crimes should create consequences and stories.' },
          { type: 'p', text: 'Profit is secondary to RP.' },
        ],
      },
      {
        number: 37,
        title: 'Crime Requires Reason',
        summary: 'Criminal activity should have an in-character motivation.',
        details: [
          { type: 'p', text: 'You do not need a complicated backstory for every crime.' },
          { type: 'p', text: 'However, repeatedly committing crimes simply because the mechanics provide money is discouraged.' },
        ],
      },
      {
        number: 38,
        title: 'Crime Pacing',
        summary: 'Do not continuously rotate between robberies simply because the cooldown has ended.',
        details: [
          { type: 'p', text: 'Allow time for:' },
          {
            type: 'ul',
            items: ['Investigation', 'Consequences', 'Relationships', 'Law enforcement response', 'Criminal retaliation', 'Character development'],
          },
          { type: 'p', text: 'A criminal should feel like a person living in the world, not an NPC completing missions.' },
        ],
      },
      {
        number: 39,
        title: 'Leave Evidence',
        summary: 'Crime should leave opportunities for investigation.',
        details: [
          { type: 'p', text: 'Where appropriate, criminals should consider:' },
          {
            type: 'ul',
            items: ['Witnesses', 'Weapons', 'Clothing', 'Horses', 'Locations', 'Victims', 'Physical evidence', 'Relationships', 'Reputation'],
          },
          { type: 'p', text: 'Do not expect every crime to be perfectly solved.' },
          { type: 'p', text: 'But do not expect every crime to be completely consequence-free either.' },
        ],
      },
      {
        number: 40,
        title: 'Robbery RP',
        summary: 'Robbery should provide meaningful interaction.',
        details: [
          { type: 'p', text: 'Do not simply: pull gun → take everything → leave.' },
          { type: 'p', text: 'Give the victim an opportunity to participate.' },
          { type: 'p', text: 'Robbery can involve:' },
          { type: 'ul', items: ['Conversation', 'Threats', 'Negotiation', 'Demands', 'Fear', 'Character interaction'] },
        ],
      },
      {
        number: 41,
        title: 'Kidnapping',
        summary: 'Kidnapping should create RP for everyone involved.',
        details: [
          { type: 'p', text: 'Do not kidnap someone simply to keep them offline or prevent them from playing.' },
          { type: 'p', text: 'The victim should have opportunities to participate in the storyline.' },
        ],
      },
      {
        number: 42,
        title: 'Torture RP',
        summary: 'Torture and extreme violence require appropriate roleplay and player consideration.',
        details: [
          { type: 'p', text: "Do not use torture as an excuse to control another player's character indefinitely." },
          {
            type: 'p',
            text: 'Where an RP situation becomes extremely graphic or personally uncomfortable, players should respect reasonable boundaries.',
          },
        ],
      },
      {
        number: 43,
        title: 'Body Disposal',
        summary: 'If your character kills someone and attempts to conceal the crime, the act should still leave room for investigation.',
        details: [
          { type: 'p', text: 'Do not assume that hiding a body automatically means nobody can ever discover what happened.' },
        ],
      },
    ],
  },
  {
    number: 'XI',
    id: 'posse-and-group-limits',
    title: 'Posse & Group Limits',
    rules: [
      {
        number: 44,
        title: 'Group Size Matters',
        summary: 'Large groups naturally have an advantage.',
        details: [
          { type: 'p', text: 'Players should respect configured posse/faction/group limits.' },
          { type: 'p', text: 'Do not use multiple groups or alternate characters to artificially bypass group limitations.' },
        ],
      },
      {
        number: 45,
        title: 'No Artificial Numbers',
        summary: 'Do not create or join groups solely to overwhelm another player.',
        details: [
          { type: 'p', text: 'The objective is not: "We have more people, therefore we win."' },
          { type: 'p', text: 'The objective is to create a believable situation.' },
        ],
      },
    ],
  },
]

// The closing "no rulebook covers everything" checklist — styled differently from the
// numbered sections above since it has no rule number of its own.
export const FRONTIER_STANDARD = {
  number: 'XII',
  id: 'the-frontier-standard',
  title: 'The Frontier Standard',
  intro: 'Our rules can never cover every possible situation. When something happens that is not specifically written here, ask yourself:',
  questions: [
    'Does it make sense for my character?',
    'Does it fit the 1890s world?',
    'Does it create RP?',
    'Am I giving the other player a chance to participate?',
    'Am I accepting consequences if things go badly?',
    'Am I doing this because it makes sense, or because the game allows it?',
  ],
  outro: "If the answer is reasonable, you're probably approaching the situation correctly.",
}

export const MOST_IMPORTANT_RULE = {
  eyebrow: 'The Most Important Rule',
  title: 'Play the Story, Not the Rulebook.',
  paragraphs: [
    'Frontier Roleplay should never become a server where players constantly ask: "Can I do this?"',
    'Instead, we want players to think: "Would this make sense for my character, and would this make a good story?"',
    'You are not required to make your character successful. You are not required to win. You are not required to be powerful. You are not required to be important.',
    'You are here to create a story. And sometimes, the best story is the one where things don\'t go your way.',
  ],
}
