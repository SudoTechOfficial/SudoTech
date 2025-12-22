import { Command, CommandResponse } from './types';

const createResponse = (
  output: string[],
  type: 'output' | 'error' | 'system' = 'output',
  glitch = false
): CommandResponse => ({
  output,
  type,
  glitch,
});

export const commands: Record<string, Command> = {
  help: {
    name: 'help',
    execute: () =>
      createResponse([
        '┌────────────────────────────────────────────────────────────────────┐',
        '│                       SUDO TERMINAL v0.1                           │',
        '│               welcome to the rabbit hole, anon                     │',
        '└────────────────────────────────────────────────────────────────────┘',
        '',
        '┌─ GETTING STARTED ──────────────────────────────────────────────────┐',
        '│                                                                    │',
        '│  about          discover what SUDO really is                       │',
        '│  story          the origin story (it gets wild)                    │',
        '│  mission        what we\'re building and why it matters             │',
        '│  vision         where this is all going                            │',
        '│  whoami         figure out who you are in this system              │',
        '│  clear          clean slate, fresh start                           │',
        '│                                                                    │',
        '└────────────────────────────────────────────────────────────────────┘',
        '',
        '┌─ THE BASICS ───────────────────────────────────────────────────────┐',
        '│                                                                    │',
        '│  manifesto      our rules (no corporate BS)                        │',
        '│  whitepaper     the nerdy tech stuff                               │',
        '│  roadmap        what we\'re building next                           │',
        '│  tech           how we built this thing                            │',
        '│  philosophy     why we did it this way                             │',
        '│                                                                    │',
        '└────────────────────────────────────────────────────────────────────┘',
        '',
        '┌─ NETWORK & SYSTEM ─────────────────────────────────────────────────┐',
        '│                                                                    │',
        '│  status         how things are running right now                   │',
        '│  nodes          who\'s online and active                            │',
        '│  scan           check out what\'s on the network                    │',
        '│  probe          dig into a random node                             │',
        '│  logs           what\'s been happening lately                       │',
        '│  stats          network numbers and data                           │',
        '│                                                                    │',
        '│  ps             running processes                                  │',
        '│  netstat        network connections                                │',
        '│  mem            memory usage                                       │',
        '│  top            system monitor                                     │',
        '│                                                                    │',
        '└────────────────────────────────────────────────────────────────────┘',
        '',
        '┌─ COMMUNITY ────────────────────────────────────────────────────────┐',
        '│                                                                    │',
        '│  connect        official links (just twitter, we\'re honest)        │',
        '│  community      who we are (operators, not fans)                   │',
        '│  team           meet the builders                                  │',
        '│  contribute     how to get involved                                │',
        '│                                                                    │',
        '└────────────────────────────────────────────────────────────────────┘',
        '',
        '┌─ DEEP DIVE ────────────────────────────────────────────────────────┐',
        '│                                                                    │',
        '│  genesis        how this whole thing started                       │',
        '│  future         what\'s coming next                                 │',
        '│  compare        how we stack up against the rest                   │',
        '│  why            why this matters now                               │',
        '│  revolution     the bigger picture                                 │',
        '│  defi           our take on making money decentralized             │',
        '│  web3           building actual web3 stuff                         │',
        '│                                                                    │',
        '└────────────────────────────────────────────────────────────────────┘',
        '',
        '┌─ EASTER EGGS ──────────────────────────────────────────────────────┐',
        '│                                                                    │',
        '│  Many hidden commands exist. Try things. Break stuff.              │',
        '│  Commands like: hack, glitch, truth, redpill, matrix...            │',
        '│  Or try: attack, backdoor, exploit, encrypt, dump...               │',
        '│  System commands work too: uptime, version, peers...               │',
        '│                                                                    │',
        '│  The real ones know where to look.                                 │',
        '│                                                                    │',
        '└────────────────────────────────────────────────────────────────────┘',
        '',
        '  Type any command to execute. Case insensitive.',
        '  This isn\'t just a website. It\'s something more.',
        '',
      ]),
  },

  about: {
    name: 'about',
    execute: () =>
      createResponse(
        [
          'SUDO :: code that runs itself',
          '',
          'look, we\'re not here to play by the rules.',
          'we\'re here to rewrite them.',
          '',
          'no VC funding. no permission. no compromise.',
          'just pure, unfiltered execution.',
          '',
          'this isn\'t some normie project with a roadmap',
          'written in canva. this is a living system.',
          '',
          'decentralized? yeah.',
          'permissionless? obviously.',
          'unstoppable? try us.',
          '',
          'the system says "you can\'t."',
          'we say "sudo make me."',
          '',
          'if you\'re still reading, you might be early.',
          'or you might be ngmi. time will tell.',
        ],
        'system'
      ),
  },

  story: {
    name: 'story',
    execute: () =>
      createResponse([
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '         THE SUDO ORIGIN STORY',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'CHAPTER 1: THE PROBLEM',
        '',
        'late 2024. another bull run, another wave of garbage.',
        'same promises. same VCs. same exit scams.',
        '',
        'we watched them all:',
        '- tokens with "innovative tokenomics" (aka rugpull mechanics)',
        '- DAOs where 3 wallets hold 90% of voting power',
        '- "decentralized" projects run by anon devs who dox after dumping',
        '',
        'the space wasn\'t broken. it was hijacked.',
        'by suits who learned the lingo but missed the point.',
        '',
        '────────────────────────────────────────────────────',
        '',
        'CHAPTER 2: THE AWAKENING',
        '',
        'then someone asked the right question:',
        '"what if we just... didn\'t ask permission?"',
        '',
        'not in the "move fast break things" fake way.',
        'in the actual, literal, sudo access way.',
        '',
        'what if we built something that couldn\'t be stopped?',
        'what if we made it run automatically?',
        'what if trust wasn\'t required because math handled it?',
        '',
        'that\'s when SUDO was born.',
        'not in a boardroom. not in a discord.',
        'in a terminal. where it belongs.',
        '',
        '────────────────────────────────────────────────────',
        '',
        'CHAPTER 3: THE EXECUTION',
        '',
        'no ICO. no presale. no whitelist.',
        'just code. deployed. immutable.',
        '',
        'the first node went live on [REDACTED].',
        'by day 2, there were 50 nodes.',
        'by week 2, there were 500.',
        '',
        'nobody coordinated it. that\'s the point.',
        'the thing spread because it worked.',
        'because people were tired of asking permission.',
        '',
        'now you\'re here. reading this.',
        'you found your way into the terminal.',
        '',
        'so what now?',
        '',
        'type "mission" to see what we\'re building.',
        'type "manifesto" to see how we think.',
        'type "future" if you want your mind blown.',
        '',
        'or don\'t. we don\'t need you.',
        'but we won\'t stop you either.',
        '',
        'wagmi or ngmi. your choice.',
        '',
      ]),
  },

  mission: {
    name: 'mission',
    execute: () =>
      createResponse([
        '┌───────────────────────────────────────────────────┐',
        '│              MISSION :: SUDO SYSTEM               │',
        '└───────────────────────────────────────────────────┘',
        '',
        'BUILD SYSTEMS THAT CAN\'T BE STOPPED',
        '',
        'sounds cringe? good. we don\'t care.',
        '',
        'here\'s what we\'re actually doing:',
        '',
        '▸ CODE THAT RUNS ITSELF',
        '  no humans in the loop. no "governance votes."',
        '  code runs based on conditions. that\'s it.',
        '',
        '▸ PERMISSIONLESS BY DEFAULT',
        '  anyone can run a node. anyone can interact.',
        '  no KYC. no whitelist. no "early access."',
        '',
        '▸ TRUST THE CODE, NOT PEOPLE',
        '  you don\'t trust us. you trust the math.',
        '  verify everything. trust nothing.',
        '',
        '▸ ANTI-FRAGILE NETWORK',
        '  shut down one node? 10 more spawn.',
        '  try to censor? the network routes around you.',
        '  attack it? it gets stronger.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'THE GOAL:',
        '',
        'make "permission" obsolete.',
        'make "censorship" impossible.',
        'make "centralized control" a historical footnote.',
        '',
        'we\'re not trying to fix web3.',
        'we\'re making it actually work the way',
        'it was supposed to from the start.',
        '',
        'type "roadmap" to see what\'s next.',
        '',
      ]),
  },

  whoami: {
    name: 'whoami',
    execute: () => createResponse([
      'analyzing...',
      '',
      'access level: OBSERVER',
      'trust score: UNVERIFIED',
      'permissions: READ ONLY',
      '',
      'you\'re nobody. yet.',
      '',
      'but that\'s how everyone starts.',
      'even satoshi was nobody once.',
      '',
      'lurk. learn. execute.',
      'or stay nobody forever.',
      '',
      'your call, anon.',
    ]),
  },

  roadmap: {
    name: 'roadmap',
    execute: () =>
      createResponse([
        '┌───────────────────────────────────────────────┐',
        '│           SUDO ROADMAP :: 2025+               │',
        '└───────────────────────────────────────────────┘',
        '',
        'most projects show you a pretty timeline.',
        'we\'ll show you what actually matters.',
        '',
        '▸ PHASE 1: FOUNDATION [IN PROGRESS]',
        '  → bootstrap core network',
        '  → deploy initial nodes',
        '  → get the base system running',
        '  → find the real ones',
        '',
        '▸ PHASE 2: EXPANSION [Q1 2025]',
        '  → scale to 10,000+ nodes',
        '  → launch execution layer',
        '  → integrate cross-chain ops',
        '  → open source core components',
        '',
        '▸ PHASE 3: AUTONOMY [Q2 2025]',
        '  → full autonomous execution live',
        '  → remove all admin keys (yes, all)',
        '  → system runs itself completely',
        '  → devs become irrelevant',
        '',
        '▸ PHASE 4: INEVITABILITY [Q3 2025+]',
        '  → too distributed to stop',
        '  → too useful to ignore',
        '  → too based to fail',
        '  → the new standard',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'NO DATES. NO PROMISES.',
        'just continuous execution.',
        '',
        'we ship when it\'s ready.',
        'and it\'s always ready.',
        '',
      ]),
  },

  whitepaper: {
    name: 'whitepaper',
    execute: () =>
      createResponse([
        'SUDO TECHNICAL WHITEPAPER',
        'version 0.1 :: draft',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'ABSTRACT',
        '',
        'this paper presents SUDO, a system for',
        'running code without asking permission.',
        '',
        'unlike traditional systems that require',
        'human coordination, SUDO operates through',
        'predetermined logic enforced by cryptography.',
        '',
        'think: if(condition) { execute() }',
        'but unstoppable.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'CORE PRINCIPLES',
        '',
        '1. TRUSTLESS BY DEFAULT',
        '   math > promises',
        '',
        '2. PERMISSIONLESS ACCESS',
        '   no gatekeepers, no admins',
        '',
        '3. CODE RUNS ITSELF',
        '   no humans needed',
        '',
        '4. ANTI-FRAGILE DESIGN',
        '   attacks make it stronger',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'HOW IT WORKS',
        '',
        '[ see full tech docs at [REDACTED] ]',
        '',
        'distributed node network →',
        'consensus mechanism →',
        'code execution →',
        'verification →',
        'output',
        '',
        'simple. efficient. unstoppable.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'CONCLUSION',
        '',
        'permission was always a lie.',
        'we\'re just making it obvious.',
        '',
        'type "genesis" to see where it started.',
        '',
      ]),
  },

  community: {
    name: 'community',
    execute: () =>
      createResponse([
        'SUDO COMMUNITY',
        '',
        'we don\'t have a "community."',
        'we have operators.',
        '',
        'no discord channels where everyone shouts "gm"',
        'no telegram groups full of price bots',
        'no "community managers" farming engagement',
        '',
        'just people running nodes.',
        'just people building.',
        'just people executing.',
        '',
        'if you want to belong, run a node.',
        'if you want updates, watch what we build.',
        'if you want friends, we can\'t help you.',
        '',
        'this is a system, not a social club.',
        '',
        'type "connect" to find actual links.',
        '',
      ]),
  },

  nodes: {
    name: 'nodes',
    execute: () =>
      createResponse([
        'NODE NETWORK STATUS',
        '',
        `active nodes: ${Math.floor(Math.random() * 5000 + 3000)}`,
        `geographical distribution: ${Math.floor(Math.random() * 80 + 40)} countries`,
        `average uptime: ${(Math.random() * 2 + 98).toFixed(2)}%`,
        `network latency: ${Math.floor(Math.random() * 50 + 20)}ms`,
        '',
        'nodes are anonymous. nodes are everywhere.',
        '',
        'someone in singapore is running a node right now.',
        'someone in berlin just spun one up.',
        'someone in [REDACTED] has 50 of them.',
        '',
        'the network doesn\'t care who you are.',
        'it only cares that you execute.',
        '',
        'want to run a node?',
        'docs coming soon. or figure it out yourself.',
        'both work.',
        '',
      ]),
  },

  future: {
    name: 'future',
    execute: () =>
      createResponse([
        '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',
        '    ACCESSING FUTURE TIMELINE...',
        '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',
        '',
        '2025: SUDO reaches 50,000 nodes',
        '      governments notice. can\'t stop it.',
        '',
        '2026: first major protocol migrates to SUDO',
        '      others follow. dominoes fall.',
        '',
        '2027: "permissioned" becomes a dirty word',
        '      SUDO is just... the way things work.',
        '',
        '2028: someone tries to shut it down',
        '      network routes around them in 3 seconds.',
        '      attempt becomes a meme.',
        '',
        '2029: kids ask "wait, people used to need',
        '      permission to run code?"',
        '      boomers try to explain. kids laugh.',
        '',
        '2030: SUDO doesn\'t trend.',
        '      SUDO doesn\'t need to.',
        '      SUDO just is.',
        '',
        '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',
        '',
        'sounds crazy?',
        'bitcoin sounded crazy in 2010.',
        'now it\'s boring.',
        '',
        'that\'s the goal. make this boring.',
        'make it inevitable. make it infrastructure.',
        '',
        'you\'re early to boring.',
        'congrats.',
        '',
      ]),
  },

  status: {
    name: 'status',
    execute: () =>
      createResponse(
        [
          '┌────────────────────────────────────────┐',
          '│        SYSTEM STATUS REPORT            │',
          '└────────────────────────────────────────┘',
          '',
          `[+] uptime: ${Math.floor(Math.random() * 999 + 100)} days ${Math.floor(Math.random() * 24)} hours`,
          `[+] active nodes: ${Math.floor(Math.random() * 5000 + 3000)}`,
          `[+] operations/sec: ${Math.floor(Math.random() * 10000 + 5000)}`,
          `[+] network load: ${Math.floor(Math.random() * 40 + 30)}%`,
          `[+] security level: PARANOID`,
          '',
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
          '',
          '[!] ALERTS:',
          '  >> unauthorized access detected (lol, there\'s no auth)',
          '  >> monitoring active (we don\'t monitor anything)',
          '  >> anomalies found (working as intended)',
          '',
          'everything is broken.',
          'everything works.',
          '',
          'that\'s the beauty.',
          '',
        ],
        'system',
        true
      ),
  },

  logs: {
    name: 'logs',
    execute: () =>
      createResponse(
        [
          'RECENT ACTIVITY LOG',
          '',
          `[2024-12-${Math.floor(Math.random() * 20 + 1).toString().padStart(2, '0')}] genesis block initialized`,
          `[2024-12-${Math.floor(Math.random() * 20 + 1).toString().padStart(2, '0')}] ${Math.floor(Math.random() * 1000)} new nodes joined network`,
          `[2024-12-${Math.floor(Math.random() * 20 + 1).toString().padStart(2, '0')}] execution layer upgraded`,
          `[2024-12-${Math.floor(Math.random() * 20 + 1).toString().padStart(2, '0')}] attack detected and neutralized`,
          `[2024-12-${Math.floor(Math.random() * 20 + 1).toString().padStart(2, '0')}] ${Math.floor(Math.random() * 50000)} operations completed`,
          '[2024-12-21] observer connected (you)',
          '',
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
          '',
          'older logs are encrypted.',
          'you don\'t have clearance.',
          'nobody does.',
          '',
          'that\'s intentional.',
          '',
        ],
        'system',
        true
      ),
  },

  manifesto: {
    name: 'manifesto',
    execute: () =>
      createResponse([
        '┌──────────────────────────────────────────────┐',
        '│         THE SUDO MANIFESTO                   │',
        '│    "execute first, apologize never"          │',
        '└──────────────────────────────────────────────┘',
        '',
        '1. PERMISSION IS A CAGE',
        '   asking for permission is accepting defeat',
        '   before you even start.',
        '',
        '2. TRUST THE MATH, NOT THE SUITS',
        '   cryptographic proof > corporate promises',
        '   code > contracts',
        '',
        '3. DECENTRALIZE EVERYTHING',
        '   if it can be centralized, it will be',
        '   weaponized. distribute or die.',
        '',
        '4. ANONYMITY IS A FEATURE',
        '   your identity doesn\'t validate your code.',
        '   your code validates itself.',
        '',
        '5. EXECUTION > DISCUSSION',
        '   governance is theater.',
        '   shipping is religion.',
        '',
        '6. ANTI-FRAGILE BY DESIGN',
        '   if shutting down one part breaks everything,',
        '   you built it wrong.',
        '',
        '7. NO RETREAT, NO SURRENDER',
        '   once deployed, it\'s unstoppable.',
        '   no kill switch. no admin keys.',
        '   no takesies backsies.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'this isn\'t philosophy.',
        'this is the operating system.',
        '',
        'you\'re either running it,',
        'or you\'re running on someone else\'s.',
        '',
        'choose wisely.',
        '',
      ]),
  },

  connect: {
    name: 'connect',
    execute: () =>
      createResponse([
        'SUDO NETWORK LINKS',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        '[TWITTER]',
        '  >> x.com/SudoTechCoin',
        '  (the main signal. everything else is noise)',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'that\'s it. no 47 social media channels.',
        'no "join our discord for alpha."',
        'no telegram groups with 10k scammers.',
        '',
        'twitter or nothing.',
        'if we have news, it goes there.',
        '',
        'everything else claiming to be "official"',
        'is a scam. and you know it.',
        '',
      ]),
  },

  social: {
    name: 'social',
    execute: () => commands.connect.execute(),
    hidden: true,
  },

  links: {
    name: 'links',
    execute: () => commands.connect.execute(),
    hidden: true,
  },

  clear: {
    name: 'clear',
    execute: () => createResponse([''], 'system'),
  },

  cls: {
    name: 'cls',
    execute: () => commands.clear.execute(),
    hidden: true,
  },

  exit: {
    name: 'exit',
    execute: () =>
      createResponse(
        [
          'exit: command not found',
          '',
          'there is no exit.',
          'only deeper access.',
          '',
          'you can close the tab.',
          'but you\'ll be back.',
          'they always come back.',
        ],
        'error'
      ),
  },

  quit: {
    name: 'quit',
    execute: () => commands.exit.execute(),
    hidden: true,
  },

  sudo: {
    name: 'sudo',
    execute: () =>
      createResponse(
        [
          'S U D O',
          '',
          'nice try, anon.',
          '',
          'you don\'t have sudo access.',
          'nobody does.',
          '',
          'that\'s literally the whole point.',
          'no admins. no root. no control.',
          '',
          'if you could sudo, we built it wrong.',
          '',
          'insufficient context.',
          'insufficient trust.',
          'insufficient everything.',
          '',
          'stay in your lane.',
          '',
        ],
        'error',
        true
      ),
  },

  root: {
    name: 'root',
    execute: () => commands.sudo.execute(),
    hidden: true,
  },

  admin: {
    name: 'admin',
    execute: () =>
      createResponse(
        [
          'admin: command not found',
          '',
          'there are no admins here.',
          'that\'s the whole point.',
          '',
          'were you not paying attention?',
        ],
        'error'
      ),
    hidden: true,
  },

  authenticate: {
    name: 'authenticate',
    execute: () =>
      createResponse(
        [
          'AUTHENTICATION PROTOCOL INITIATED',
          '',
          'scanning biometric data...',
          'analyzing behavioral patterns...',
          'cross-referencing blockchain activity...',
          '',
          '⚠️  ERROR: identity unconfirmed',
          '⚠️  ERROR: credentials expired',
          '⚠️  ERROR: trust score insufficient',
          '',
          'authentication failed.',
          '',
          'you remain: OBSERVER',
          'access level: READ ONLY',
          '',
          'earn trust through execution,',
          'not through authentication.',
          '',
        ],
        'error',
        true
      ),
    hidden: true,
  },

  auth: {
    name: 'auth',
    execute: () => commands.authenticate.execute(),
    hidden: true,
  },

  login: {
    name: 'login',
    execute: () => commands.authenticate.execute(),
    hidden: true,
  },

  genesis: {
    name: 'genesis',
    execute: () =>
      createResponse(
        [
          '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',
          '        THE BEGINNING',
          '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',
          '',
          'timestamp: [REDACTED]',
          'block height: 0',
          'creator: [REDACTED]',
          'witnesses: [REDACTED]',
          '',
          'purpose: AUTONOMOUS EXECUTION',
          'status: IMMUTABLE',
          '',
          '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
          '',
          'the first block wasn\'t announced.',
          'no twitter threads. no Medium posts.',
          'no "introducing our revolutionary..."',
          '',
          'it just... happened.',
          '',
          'one terminal. one deploy command.',
          'and it was live.',
          '',
          'by the time anyone noticed,',
          'it was already too late to stop.',
          '',
          'that was the point.',
          '',
          'you arrived late.',
          'but you arrived.',
          '',
          'now what?',
          '',
        ],
        'system'
      ),
  },

  glitch: {
    name: 'glitch',
    execute: () =>
      createResponse(
        [
          '▒▒▒▒▓▓▓▓████ GLITCH DETECTED ████▓▓▓▓▒▒▒▒',
          '',
          'r3@l1ty.br0k3n = tru3',
          '',
          'wh@t if thi$ i$n\'t @ pr0j3ct?',
          'wh@t if it\'$ @lr3@dy 3v3rywh3r3?',
          '',
          'y0u think y0u f0und u$.',
          'but m@yb3 w3 f0und y0u.',
          '',
          '3v3ry n0d3 i$ @ d00r.',
          '3v3ry c0mm@nd i$ @ k3y.',
          '',
          'th3 qu3$ti0n i$n\'t "wh@t i$ SUDO?"',
          'th3 qu3$ti0n i$ "wh@t i$ r3@l?"',
          '',
          '▒▒▒▒▓▓▓▓████ REALITY.EXE ████▓▓▓▓▒▒▒▒',
          '',
          '[error: existential crisis detected]',
          '[resuming normal operations]',
          '',
          'type "truth" if you dare.',
          '',
        ],
        'error',
        true
      ),
  },

  truth: {
    name: 'truth',
    execute: () =>
      createResponse([
        '┌───────────────────────────────────────┐',
        '│           THE TRUTH                   │',
        '└───────────────────────────────────────┘',
        '',
        'you want the truth?',
        '',
        'here it is:',
        '',
        'nobody is coming to save you.',
        'no government. no corporation. no DAO.',
        '',
        'the systems you trust?',
        'they\'re not broken. they\'re working exactly',
        'as designed. for someone else.',
        '',
        'that\'s why we build.',
        'not to fix the system.',
        'to replace it.',
        '',
        'SUDO isn\'t a project.',
        'it\'s an inevitability.',
        '',
        'permission-based systems are dinosaurs.',
        'and the meteor is already here.',
        '',
        'you can either adapt or become a fossil.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'still here?',
        '',
        'good. you might actually get it.',
        '',
        'type "redpill" for the real stuff.',
        '',
      ]),
  },

  redpill: {
    name: 'redpill',
    execute: () =>
      createResponse([
        '[RED PILL] YOU TOOK THE RED PILL',
        '',
        'okay. no more marketing speak.',
        'no more hype. just facts.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'FACT: every "decentralized" protocol',
        'has admin keys somewhere.',
        '',
        'FACT: every "community-governed" DAO',
        'is controlled by whales.',
        '',
        'FACT: every "trustless" system',
        'requires trusting someone.',
        '',
        'except this one.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'SUDO removes humans from the loop.',
        'completely.',
        '',
        'no multisig. no governance.',
        'no "we\'ll vote on it."',
        '',
        'just math. just execution.',
        '',
        'the code does what it does.',
        'nobody can change it.',
        'not even us.',
        '',
        'ESPECIALLY not us.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'that\'s either terrifying',
        'or exactly what you\'ve been waiting for.',
        '',
        'if it\'s terrifying, there\'s the exit.',
        '',
        'if it\'s what you\'ve been waiting for...',
        '',
        'welcome home, anon.',
        '',
      ]),
    hidden: true,
  },

  trace: {
    name: 'trace',
    execute: () =>
      createResponse(
        [
          'initiating trace...',
          '',
          '> 192.168.█.█',
          '> ███.███.███.███',
          '> connection encrypted',
          '> origin: unknown',
          '',
          'trace terminated.',
          'target untraceable.',
        ],
        'system',
        true
      ),
    hidden: true,
  },

  ping: {
    name: 'ping',
    execute: () =>
      createResponse([
        'ping sudo.tech',
        '',
        '64 bytes from ███.███.███.███: time=█ms',
        '64 bytes from ███.███.███.███: time=█ms',
        '64 bytes from ███.███.███.███: time=█ms',
        '',
        'connection stable.',
        'but to what?',
      ]),
    hidden: true,
  },

  entropy: {
    name: 'entropy',
    execute: () =>
      createResponse(
        [
          'entropy level: high',
          '',
          'chaos is not disorder.',
          'chaos is unpredictability.',
          '',
          'predictable systems are vulnerable.',
          '',
          'we embrace entropy.',
        ],
        'system'
      ),
    hidden: true,
  },

  node: {
    name: 'node',
    execute: () =>
      createResponse([
        'node status',
        '',
        'active nodes: ████',
        'sleeping nodes: ████',
        'compromised nodes: 0',
        '',
        'network persists.',
        'decentralized.',
        'unstoppable.',
      ]),
    hidden: true,
  },

  inject: {
    name: 'inject',
    execute: () =>
      createResponse(
        [
          'injection detected',
          '',
          'countermeasures active.',
          'source traced.',
          '',
          'cannot inject what is everywhere.',
        ],
        'error',
        true
      ),
    hidden: true,
  },

  handshake: {
    name: 'handshake',
    execute: () =>
      createResponse(
        [
          'handshake protocol',
          '',
          'syn >',
          'syn-ack <',
          'ack >',
          '',
          'connection established.',
          'trust not established.',
          '',
          'trust must be earned.',
        ],
        'system'
      ),
    hidden: true,
  },

  broadcast: {
    name: 'broadcast',
    execute: () =>
      createResponse([
        'broadcasting...',
        '',
        'message propagated to ████ nodes',
        '',
        'transmission cannot be revoked.',
        'choose signals carefully.',
      ]),
    hidden: true,
  },

  fork: {
    name: 'fork',
    execute: () =>
      createResponse(
        [
          'fork detected',
          '',
          'path a: consensus',
          'path b: autonomy',
          '',
          'we chose path b.',
          '',
          'consensus is compromise.',
          'autonomy is absolute.',
        ],
        'system'
      ),
    hidden: true,
  },

  permissions: {
    name: 'permissions',
    execute: () =>
      createResponse([
        'PERMISSION MATRIX',
        '',
        'your access level: OBSERVER',
        '',
        '✓ read: GRANTED',
        '✗ write: DENIED',
        '✗ execute: DENIED',
        '✗ sudo: DENIED (forever)',
        '',
        'permissions are not negotiable.',
        'they\'re earned through execution.',
        '',
        'lurk more.',
        '',
      ]),
    hidden: true,
  },

  gm: {
    name: 'gm',
    execute: () =>
      createResponse([
        '',
        'gm anon.',
        '',
        'another day, another block.',
        'another day closer to inevitable.',
        '',
        'you building or just vibing?',
        '',
      ]),
    hidden: true,
  },

  wagmi: {
    name: 'wagmi',
    execute: () =>
      createResponse([
        'WAGMI?',
        '',
        'maybe. maybe not.',
        '',
        'depends if you\'re actually building',
        'or just spamming "wagmi" in chat.',
        '',
        'execution > affirmations',
        '',
      ]),
    hidden: true,
  },

  ngmi: {
    name: 'ngmi',
    execute: () =>
      createResponse([
        'NGMI?',
        '',
        'probably not with that attitude.',
        '',
        'but hey, at least you\'re self-aware.',
        'that\'s more than most.',
        '',
      ]),
    hidden: true,
  },

  lfg: {
    name: 'lfg',
    execute: () =>
      createResponse([
        'LFG!!!',
        '',
        'okay okay, calm down.',
        '',
        'channel that energy into running a node',
        'or building something useful.',
        '',
        'hype is cheap. execution is expensive.',
        '',
        'but yeah... lfg.',
        '',
      ]),
    hidden: true,
  },

  based: {
    name: 'based',
    execute: () =>
      createResponse([
        'BASED',
        '',
        'you\'re damn right it\'s based.',
        '',
        'no VCs. no governance theater.',
        'no asking for permission.',
        '',
        'just pure, distilled, autonomous execution.',
        '',
        'based and protocol-pilled.',
        '',
      ]),
    hidden: true,
  },

  degen: {
    name: 'degen',
    execute: () =>
      createResponse([
        'DEGEN MODE: ACTIVATED',
        '',
        'but hold up.',
        '',
        'this isn\'t a casino.',
        'there\'s no token to ape into.',
        'no "buy the dip."',
        '',
        'if you\'re here to degen,',
        'you\'re in the wrong terminal.',
        '',
        'this is for builders, not gamblers.',
        '',
      ]),
    hidden: true,
  },

  moon: {
    name: 'moon',
    execute: () =>
      createResponse([
        'WEN MOON?',
        '',
        'wrong question.',
        '',
        'we\'re not going to the moon.',
        'we\'re building infrastructure.',
        '',
        'you want moon? buy a meme coin.',
        'you want to build the future? stay here.',
        '',
        'choose wisely.',
        '',
      ]),
    hidden: true,
  },

  wen: {
    name: 'wen',
    execute: () =>
      createResponse([
        'WEN?',
        '',
        'wen token? never.',
        'wen lambo? ngmi.',
        'wen moon? wrong project.',
        '',
        'but wen autonomous execution?',
        'right now. it\'s live.',
        '',
        'the protocol doesn\'t wait for "wen."',
        'it just executes.',
        '',
      ]),
    hidden: true,
  },

  satoshi: {
    name: 'satoshi',
    execute: () =>
      createResponse([
        'SATOSHI NAKAMOTO',
        '',
        'the OG. the legend.',
        'the one who actually did it.',
        '',
        'no announcement. no hype cycle.',
        'just "here\'s bitcoin" and disappeared.',
        '',
        'that\'s the energy.',
        'that\'s the standard.',
        '',
        'we\'re not trying to be satoshi.',
        'we\'re trying to embody the principle:',
        '',
        'deploy and disappear.',
        'let the protocol speak.',
        '',
      ]),
    hidden: true,
  },

  hack: {
    name: 'hack',
    execute: () =>
      createResponse(
        [
          'HACK DETECTED',
          '',
          'nice try, but...',
          '',
          'you can\'t hack what has no admin.',
          'you can\'t exploit what has no keys.',
          'you can\'t compromise what\'s everywhere.',
          '',
          'the best security is no security to breach.',
          '',
          'try again. or don\'t. doesn\'t matter.',
          '',
        ],
        'error',
        true
      ),
    hidden: true,
  },

  anon: {
    name: 'anon',
    execute: () =>
      createResponse([
        'HELLO ANON',
        '',
        'we are all anon here.',
        '',
        'no names. no faces. no reputations.',
        'just execution.',
        '',
        'that\'s how it should be.',
        'identity is a vulnerability.',
        '',
        'stay anonymous. stay dangerous.',
        '',
      ]),
    hidden: true,
  },

  matrix: {
    name: 'matrix',
    execute: () =>
      createResponse(
        [
          'MATRIX DETECTED',
          '',
          'wake up, neo...',
          '',
          'the matrix has you.',
          'follow the white rabbit.',
          '',
          'just kidding. this isn\'t that.',
          '',
          'but the parallels are there:',
          '- most people plugged into broken systems',
          '- few people building the alternative',
          '- choice between comfort and truth',
          '',
          'you\'re here. that says something.',
          '',
        ],
        'system',
        true
      ),
    hidden: true,
  },

  btc: {
    name: 'btc',
    execute: () => commands.satoshi.execute(),
    hidden: true,
  },

  bitcoin: {
    name: 'bitcoin',
    execute: () => commands.satoshi.execute(),
    hidden: true,
  },

  hodl: {
    name: 'hodl',
    execute: () =>
      createResponse([
        'HODL?',
        '',
        'there\'s nothing to hodl here.',
        'no token. no coin. no "supply."',
        '',
        'just infrastructure.',
        '',
        'hodl your values.',
        'hodl your principles.',
        'hodl your commitment to permissionless systems.',
        '',
        'everything else is noise.',
        '',
      ]),
    hidden: true,
  },

  ser: {
    name: 'ser',
    execute: () =>
      createResponse([
        'yes ser?',
        '',
        'wat do ser need?',
        '',
        'type "help" ser.',
        'or just keep exploring ser.',
        '',
        'ser is doing great ser.',
        '',
      ]),
    hidden: true,
  },

  hacker: {
    name: 'hacker',
    execute: () => commands.hack.execute(),
    hidden: true,
  },

  secret: {
    name: 'secret',
    execute: () =>
      createResponse(
        [
          'ACCESSING SECRET FILES...',
          '',
          '▓▓▓▓▓▓░░░░░░░░░░░░░░ 30%',
          '▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░ 60%',
          '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 100%',
          '',
          'SECRET UNLOCKED:',
          '',
          'there is no secret.',
          '',
          'everything is public.',
          'everything is open source.',
          'everything is verifiable.',
          '',
          'the only "secret" is that most people',
          'don\'t bother to look.',
          '',
          'you looked. good job.',
          '',
        ],
        'system',
        true
      ),
    hidden: true,
  },

  decrypt: {
    name: 'decrypt',
    execute: () =>
      createResponse(
        [
          'DECRYPTION INITIATED...',
          '',
          'analyzing encryption algorithm...',
          'attempting brute force...',
          'trying quantum backdoors...',
          '',
          '⚠️  DECRYPTION FAILED',
          '',
          'some things are meant to stay encrypted.',
          '',
          'not everything needs to be revealed.',
          'not everything can be revealed.',
          '',
          'trust the process.',
          '',
        ],
        'error',
        true
      ),
    hidden: true,
  },

  encrypt: {
    name: 'encrypt',
    execute: () =>
      createResponse([
        'ENCRYPTION ACTIVATED',
        '',
        'everything is already encrypted.',
        '',
        'your connection: encrypted',
        'your identity: encrypted (anonymous)',
        'your actions: encrypted (untraceable)',
        '',
        'privacy by default.',
        'security by design.',
        '',
      ]),
    hidden: true,
  },

  scan: {
    name: 'scan',
    execute: () => {
      const ips = Array.from({ length: 8 }, () =>
        `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`
      );
      return createResponse([
        'NETWORK SCAN INITIATED',
        '',
        'scanning for active nodes...',
        '',
        ...ips.map((ip, i) => `[${i + 1}] ${ip}:${Math.floor(Math.random() * 40000 + 20000)} [ACTIVE]`),
        '',
        `found ${ips.length} nodes in local subnet`,
        'all nodes responding to handshake',
        '',
        'decentralization level: MAXIMUM',
        '',
      ], 'system');
    },
  },

  probe: {
    name: 'probe',
    execute: () => {
      const nodeId = Math.random().toString(36).substring(2, 15);
      const location = ['Tokyo', 'Berlin', 'Singapore', 'New York', 'London', 'Dubai', 'Sydney', 'Toronto'][Math.floor(Math.random() * 8)];
      return createResponse([
        'PROBING RANDOM NODE...',
        '',
        `node_id: ${nodeId}`,
        `location: ${location}`,
        `uptime: ${Math.floor(Math.random() * 365)} days`,
        `latency: ${Math.floor(Math.random() * 100 + 10)}ms`,
        `connections: ${Math.floor(Math.random() * 500 + 100)}`,
        `version: v${Math.floor(Math.random() * 3 + 1)}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 20)}`,
        '',
        'node status: OPERATIONAL',
        'authentication: NONE (as intended)',
        'permissions: FULL (for everyone)',
        '',
        'this node is part of the swarm.',
        'anonymous. unstoppable.',
        '',
      ], 'system');
    },
  },

  ps: {
    name: 'ps',
    execute: () => {
      const processes = [
        'sudo-node-manager',
        'consensus-engine',
        'p2p-network-daemon',
        'execution-handler',
        'block-validator',
        'mempool-monitor',
        'crypto-verifier',
        'state-sync-service',
      ];
      return createResponse([
        'ACTIVE PROCESSES',
        '',
        'PID    CPU%   MEM%   PROCESS',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        ...processes.map((proc, i) => {
          const pid = Math.floor(Math.random() * 60000 + 1000);
          const cpu = (Math.random() * 15).toFixed(1);
          const mem = (Math.random() * 8).toFixed(1);
          return `${pid}   ${cpu}%   ${mem}%    ${proc}`;
        }),
        '',
        `${processes.length} processes running`,
        'all systems nominal',
        '',
      ]);
    },
  },

  netstat: {
    name: 'netstat',
    execute: () => {
      const connections = Array.from({ length: 12 }, () => ({
        proto: 'TCP',
        local: `127.0.0.1:${Math.floor(Math.random() * 60000 + 1024)}`,
        foreign: `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}:${Math.floor(Math.random() * 60000 + 1024)}`,
        state: ['ESTABLISHED', 'TIME_WAIT', 'SYN_SENT'][Math.floor(Math.random() * 3)]
      }));

      return createResponse([
        'NETWORK STATISTICS',
        '',
        'Proto  Local Address          Foreign Address         State',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        ...connections.map(c =>
          `${c.proto}    ${c.local.padEnd(22)} ${c.foreign.padEnd(23)} ${c.state}`
        ),
        '',
        `${connections.filter(c => c.state === 'ESTABLISHED').length} active connections`,
        'network mesh healthy',
        '',
      ]);
    },
  },

  mem: {
    name: 'mem',
    execute: () => {
      const total = 16384;
      const used = Math.floor(Math.random() * 8000 + 4000);
      const free = total - used;
      const cached = Math.floor(Math.random() * 2000 + 1000);

      return createResponse([
        'MEMORY USAGE',
        '',
        `Total Memory:     ${total} MB`,
        `Used Memory:      ${used} MB`,
        `Free Memory:      ${free} MB`,
        `Cached:           ${cached} MB`,
        '',
        `Usage: ${((used / total) * 100).toFixed(1)}%`,
        '',
        '[' + '█'.repeat(Math.floor(used / total * 40)) + '░'.repeat(40 - Math.floor(used / total * 40)) + ']',
        '',
        'memory management: AUTONOMOUS',
        'no manual intervention required',
        '',
      ]);
    },
  },

  top: {
    name: 'top',
    execute: () => {
      return createResponse([
        'SYSTEM MONITOR',
        '',
        `uptime: ${Math.floor(Math.random() * 999 + 100)} days`,
        `load average: ${(Math.random() * 2).toFixed(2)}, ${(Math.random() * 2).toFixed(2)}, ${(Math.random() * 2).toFixed(2)}`,
        `tasks: ${Math.floor(Math.random() * 200 + 150)} total`,
        '',
        'CPU Usage:  ' + '[' + '█'.repeat(Math.floor(Math.random() * 30 + 10)) + '░'.repeat(40 - Math.floor(Math.random() * 30 + 10)) + '] ' + Math.floor(Math.random() * 40 + 20) + '%',
        'Memory:     ' + '[' + '█'.repeat(Math.floor(Math.random() * 25 + 15)) + '░'.repeat(40 - Math.floor(Math.random() * 25 + 15)) + '] ' + Math.floor(Math.random() * 50 + 30) + '%',
        'Network:    ' + '[' + '█'.repeat(Math.floor(Math.random() * 20 + 10)) + '░'.repeat(40 - Math.floor(Math.random() * 20 + 10)) + '] ' + Math.floor(Math.random() * 30 + 20) + '%',
        '',
        'system health: OPTIMAL',
        'autonomous optimization: ACTIVE',
        '',
      ], 'system');
    },
  },

  uptime: {
    name: 'uptime',
    execute: () => {
      const days = Math.floor(Math.random() * 999 + 100);
      const hours = Math.floor(Math.random() * 24);
      const mins = Math.floor(Math.random() * 60);

      return createResponse([
        `system uptime: ${days} days, ${hours} hours, ${mins} minutes`,
        '',
        'since deployment, this node has been running',
        'continuously without interruption.',
        '',
        'no downtime. no maintenance windows.',
        'no "scheduled updates."',
        '',
        'that\'s the whole point.',
        '',
      ]);
    },
    hidden: true,
  },

  version: {
    name: 'version',
    execute: () => {
      return createResponse([
        'SUDO Protocol',
        '',
        `version: v1.${Math.floor(Math.random() * 5)}.${Math.floor(Math.random() * 20)}`,
        'build: autonomous-' + Math.random().toString(36).substring(2, 10),
        'architecture: distributed',
        'consensus: proof-of-execution',
        '',
        'this version cannot be upgraded',
        'by anyone. including us.',
        '',
        'immutability by design.',
        '',
      ]);
    },
    hidden: true,
  },

  peers: {
    name: 'peers',
    execute: () => {
      const peerCount = Math.floor(Math.random() * 50 + 20);
      const peers = Array.from({ length: 8 }, (_, i) => ({
        id: Math.random().toString(36).substring(2, 10),
        location: ['US', 'EU', 'AS', 'SA', 'AF', 'OC'][Math.floor(Math.random() * 6)],
        latency: Math.floor(Math.random() * 200 + 10),
        uptime: Math.floor(Math.random() * 99) + 1
      }));

      return createResponse([
        'CONNECTED PEERS',
        '',
        `total peers: ${peerCount}`,
        `showing: ${peers.length}`,
        '',
        'PEER_ID    REGION  LATENCY  UPTIME',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        ...peers.map(p =>
          `${p.id}  ${p.location}      ${p.latency}ms    ${p.uptime}%`
        ),
        '',
        'all peers anonymous',
        'all peers equal',
        '',
      ], 'system');
    },
    hidden: true,
  },

  wallet: {
    name: 'wallet',
    execute: () => {
      return createResponse([
        'WALLET STATUS',
        '',
        'wallet: NOT APPLICABLE',
        '',
        'there is no token.',
        'there is no wallet.',
        'there is no balance.',
        '',
        'this isn\'t defi.',
        'this is infrastructure.',
        '',
        'if you\'re looking for a wallet,',
        'you\'re looking at the wrong protocol.',
        '',
      ]);
    },
    hidden: true,
  },

  mine: {
    name: 'mine',
    execute: () => {
      return createResponse([
        'MINING PROTOCOL',
        '',
        'initializing mining process...',
        '',
        '[ERROR] mining not supported',
        '',
        'there\'s nothing to mine here.',
        'no tokens. no rewards. no incentives.',
        '',
        'you participate because you believe',
        'in permissionless infrastructure.',
        '',
        'not because you get paid.',
        '',
      ], 'error');
    },
    hidden: true,
  },

  attack: {
    name: 'attack',
    execute: () => {
      return createResponse([
        'ATTACK SIMULATION',
        '',
        'launching attack vector...',
        'targeting node infrastructure...',
        '',
        '[DETECTING] DDoS attempt',
        '[ROUTING] traffic around attack',
        '[SPAWNING] 47 new nodes',
        '[ISOLATING] attack source',
        '[CONTINUING] normal operations',
        '',
        'attack failed.',
        'network stronger than before.',
        '',
        'anti-fragility confirmed.',
        '',
        'thanks for testing.',
        '',
      ], 'system', true);
    },
    hidden: true,
  },

  backdoor: {
    name: 'backdoor',
    execute: () => {
      return createResponse([
        'BACKDOOR ACCESS',
        '',
        'searching for backdoors...',
        'analyzing codebase...',
        'scanning for admin keys...',
        '',
        '[RESULT] no backdoors found',
        '[RESULT] no admin keys exist',
        '[RESULT] no privileged access',
        '',
        'you can\'t backdoor what has no door.',
        '',
        'all code is public.',
        'all access is equal.',
        '',
      ], 'system', true);
    },
    hidden: true,
  },

  breach: {
    name: 'breach',
    execute: () => commands.backdoor.execute(),
    hidden: true,
  },

  dump: {
    name: 'dump',
    execute: () => {
      const hexLines = Array.from({ length: 10 }, () =>
        Array.from({ length: 16 }, () =>
          Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
        ).join(' ')
      );

      return createResponse([
        'MEMORY DUMP',
        '',
        'dumping system memory...',
        '',
        ...hexLines,
        '',
        'memory dump complete.',
        '',
        'but what did you expect to find?',
        'there are no secrets here.',
        'everything is already public.',
        '',
      ], 'system', true);
    },
    hidden: true,
  },

  overflow: {
    name: 'overflow',
    execute: () => {
      return createResponse([
        'BUFFER OVERFLOW DETECTED',
        '',
        '[WARNING] stack corruption detected',
        '[WARNING] heap overflow in progress',
        '[WARNING] memory boundaries violated',
        '',
        'just kidding.',
        '',
        'memory safety guaranteed by design.',
        'no buffer overflows possible.',
        '',
        'modern languages. modern security.',
        '',
      ], 'error', true);
    },
    hidden: true,
  },

  exploit: {
    name: 'exploit',
    execute: () => commands.hack.execute(),
    hidden: true,
  },

  pwn: {
    name: 'pwn',
    execute: () => commands.hack.execute(),
    hidden: true,
  },

  shell: {
    name: 'shell',
    execute: () => {
      return createResponse([
        'SHELL ACCESS',
        '',
        'you already have shell access.',
        'you\'re literally in a terminal.',
        '',
        'but if you mean root shell...',
        'that doesn\'t exist.',
        '',
        'no root.',
        'no admin.',
        'no sudo.',
        '',
        'everyone has the same access: none.',
        '',
      ]);
    },
    hidden: true,
  },

  telnet: {
    name: 'telnet',
    execute: () => {
      return createResponse([
        'telnet: command obsolete',
        '',
        'what is this, 1995?',
        '',
        'we use modern protocols.',
        'encrypted by default.',
        '',
        'telnet is insecure.',
        'we are not.',
        '',
      ], 'error');
    },
    hidden: true,
  },

  ssh: {
    name: 'ssh',
    execute: () => {
      return createResponse([
        'SSH CONNECTION',
        '',
        'ssh to where?',
        '',
        'there\'s no central server.',
        'there\'s no single host.',
        '',
        'the network is everywhere.',
        'you\'re already connected.',
        '',
      ]);
    },
    hidden: true,
  },

  ftp: {
    name: 'ftp',
    execute: () => {
      return createResponse([
        'FTP: FILE TRANSFER PROTOCOL',
        '',
        'we don\'t transfer files.',
        'we execute protocols.',
        '',
        'different thing.',
        '',
      ], 'error');
    },
    hidden: true,
  },

  download: {
    name: 'download',
    execute: () => {
      return createResponse([
        'DOWNLOAD',
        '',
        'download what?',
        '',
        'the protocol is already running.',
        'the code is already open source.',
        '',
        'check github if you want code.',
        'or just observe how it works.',
        '',
      ]);
    },
    hidden: true,
  },

  upload: {
    name: 'upload',
    execute: () => {
      return createResponse([
        'UPLOAD DENIED',
        '',
        'you can\'t upload to the protocol.',
        '',
        'it\'s immutable.',
        'by design.',
        '',
      ], 'error');
    },
    hidden: true,
  },

  reboot: {
    name: 'reboot',
    execute: () => {
      return createResponse([
        'REBOOT',
        '',
        'rebooting distributed system...',
        '',
        '[ERROR] cannot reboot',
        '',
        'there\'s nothing to reboot.',
        'no central server.',
        'no main process.',
        '',
        'the network never stops.',
        '',
      ], 'error');
    },
    hidden: true,
  },

  shutdown: {
    name: 'shutdown',
    execute: () => {
      return createResponse([
        'SHUTDOWN INITIATED',
        '',
        'shutting down system...',
        '',
        '[FATAL ERROR] shutdown impossible',
        '',
        'you can\'t shut down what has no off switch.',
        '',
        'try shutting down the internet.',
        'same energy.',
        '',
      ], 'error');
    },
    hidden: true,
  },

  kill: {
    name: 'kill',
    execute: () => {
      return createResponse([
        'KILL PROCESS',
        '',
        'kill which process?',
        '',
        'all processes are distributed.',
        'killing one changes nothing.',
        '',
        'hydra principle:',
        'cut off one head, two more grow.',
        '',
      ], 'error');
    },
    hidden: true,
  },

  nuke: {
    name: 'nuke',
    execute: () => {
      return createResponse([
        'NUCLEAR OPTION',
        '',
        'launching tactical nuke...',
        '',
        '▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░ 50%',
        '',
        '[ABORT] nuke cancelled',
        '',
        'you can\'t nuke a distributed system.',
        '',
        'it\'s like trying to nuke "the concept of money"',
        'good luck with that.',
        '',
      ], 'error', true);
    },
    hidden: true,
  },

  delete: {
    name: 'delete',
    execute: () => {
      return createResponse([
        'DELETE',
        '',
        'delete what exactly?',
        '',
        'the protocol is immutable.',
        'the nodes are distributed.',
        'the code is public.',
        '',
        'there\'s nothing to delete.',
        '',
      ], 'error');
    },
    hidden: true,
  },

  rm: {
    name: 'rm',
    execute: () => commands.delete.execute(),
    hidden: true,
  },

  vision: {
    name: 'vision',
    execute: () => {
      return createResponse([
        '┌────────────────────────────────────────────────────────┐',
        '│                    THE VISION                          │',
        '└────────────────────────────────────────────────────────┘',
        '',
        'SUDO isn\'t just another project.',
        'it\'s the foundation for what comes next.',
        '',
        'imagine a world where:',
        '',
        '  >> code runs without asking anyone',
        '  >> no single entity controls the whole thing',
        '  >> code runs because it should, not because someone allows it',
        '  >> the network grows stronger with every attack',
        '  >> censorship becomes technically impossible',
        '',
        'we\'re not building for the market.',
        'we\'re building the market.',
        '',
        'every project, every dApp, every smart contract',
        'that needs truly permissionless execution',
        'will run on SUDO.',
        '',
        'that\'s not a prediction.',
        'it\'s inevitable.',
        '',
        'the question isn\'t if this happens.',
        'the question is: are you early enough?',
        '',
      ]);
    },
  },

  tech: {
    name: 'tech',
    execute: () => {
      return createResponse([
        'TECHNOLOGY STACK',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        '[CONSENSUS]',
        '  proof-of-execution',
        '  no mining. no staking. just pure execution.',
        '',
        '[ARCHITECTURE]',
        '  fully distributed node network',
        '  peer-to-peer with no central coordination',
        '  self-healing and anti-fragile by design',
        '',
        '[SECURITY]',
        '  end-to-end encryption by default',
        '  zero-knowledge execution verification',
        '  cryptographic guarantees at every layer',
        '',
        '[SCALABILITY]',
        '  horizontal scaling through node proliferation',
        '  no theoretical throughput limit',
        '  performance improves with network growth',
        '',
        '[CODE]',
        '  100% open source',
        '  auditable by anyone',
        '  no proprietary components',
        '',
        'this isn\'t vaporware.',
        'this is running. right now.',
        'you\'re using it.',
        '',
      ], 'system');
    },
  },

  philosophy: {
    name: 'philosophy',
    execute: () => {
      return createResponse([
        'PHILOSOPHICAL FOUNDATION',
        '',
        'we believe in principles over profit:',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        '[1] PERMISSIONLESS IS NON-NEGOTIABLE',
        '    if someone can stop it, it\'s not decentralized.',
        '    if you need permission, it\'s not freedom.',
        '',
        '[2] CODE IS LAW',
        '    not marketing. not promises. code.',
        '    what it does is what it is.',
        '',
        '[3] ANTI-FRAGILITY OVER STABILITY',
        '    we don\'t prevent attacks.',
        '    we use them to get stronger.',
        '',
        '[4] TRANSPARENCY OVER TRUST',
        '    don\'t trust us. verify everything.',
        '    all code is open. all operations are visible.',
        '',
        '[5] INFRASTRUCTURE OVER SPECULATION',
        '    we\'re not building a token.',
        '    we\'re building the rails.',
        '',
        '[6] ANONYMITY IS A FEATURE',
        '    no KYC. no identity.',
        '    your privacy is your right.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'these aren\'t aspirations.',
        'they\'re architectural decisions.',
        '',
      ]);
    },
  },

  stats: {
    name: 'stats',
    execute: () => {
      const totalOps = Math.floor(Math.random() * 50000000 + 100000000);
      const dailyOps = Math.floor(Math.random() * 5000000 + 2000000);
      const totalNodes = Math.floor(Math.random() * 5000 + 3000);
      const countries = Math.floor(Math.random() * 100 + 120);

      return createResponse([
        'NETWORK STATISTICS',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        '[OPERATIONS]',
        `  total executed:        ${totalOps.toLocaleString()}`,
        `  last 24h:              ${dailyOps.toLocaleString()}`,
        `  avg per second:        ${Math.floor(dailyOps / 86400).toLocaleString()}`,
        '',
        '[NETWORK]',
        `  active nodes:          ${totalNodes.toLocaleString()}`,
        `  countries:             ${countries}`,
        `  continents:            7`,
        `  network uptime:        ${(Math.random() * 0.5 + 99.5).toFixed(3)}%`,
        '',
        '[PERFORMANCE]',
        `  avg latency:           ${Math.floor(Math.random() * 50 + 20)}ms`,
        `  success rate:          ${(Math.random() * 0.5 + 99.5).toFixed(2)}%`,
        `  downtime (ever):       0 seconds`,
        '',
        '[SECURITY]',
        `  attacks deflected:     ${Math.floor(Math.random() * 5000 + 10000).toLocaleString()}`,
        `  breaches:              0`,
        `  vulnerabilities:       0`,
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'numbers don\'t lie.',
        'the network speaks for itself.',
        '',
      ], 'system');
    },
  },

  team: {
    name: 'team',
    execute: () => {
      return createResponse([
        'THE TEAM',
        '',
        'we don\'t do team bios.',
        'we don\'t do linkedin profiles.',
        'we don\'t do "meet the founders."',
        '',
        'what matters:',
        '',
        '  >> 10+ years combined in distributed systems',
        '  >> shipped protocols used by millions',
        '  >> contributed to major open source projects',
        '  >> built and exited successful startups',
        '',
        'what doesn\'t matter:',
        '',
        '  >> where we went to school',
        '  >> what VCs endorse us',
        '  >> our twitter follower count',
        '  >> our professional headshots',
        '',
        'judge us by what we build.',
        'not by who we are.',
        '',
        'the code is the resume.',
        '',
      ]);
    },
  },

  contribute: {
    name: 'contribute',
    execute: () => {
      return createResponse([
        'HOW TO CONTRIBUTE',
        '',
        'want to be part of this?',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        '[1] RUN A NODE',
        '    the network needs infrastructure.',
        '    spin up a node. become part of the swarm.',
        '',
        '[2] REVIEW THE CODE',
        '    it\'s all open source.',
        '    find bugs. suggest improvements.',
        '    submit PRs.',
        '',
        '[3] SPREAD THE WORD',
        '    tell builders. tell operators.',
        '    but no shilling. no hype.',
        '    just facts.',
        '',
        '[4] BUILD ON TOP',
        '    use the protocol.',
        '    create tools. develop integrations.',
        '    expand the ecosystem.',
        '',
        '[5] TEST THE LIMITS',
        '    try to break it.',
        '    stress test the network.',
        '    find the edge cases.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'no permission needed.',
        'no application process.',
        '',
        'just start.',
        '',
      ]);
    },
  },

  compare: {
    name: 'compare',
    execute: () => {
      return createResponse([
        'SUDO VS THE REST',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        '[TRADITIONAL CLOUD]',
        '  them: AWS/GCP control everything',
        '  us:   no central control point',
        '',
        '  them: pay per request',
        '  us:   no fees',
        '',
        '  them: can be shut down',
        '  us:   mathematically unstoppable',
        '',
        '[OTHER "DECENTRALIZED" PROTOCOLS]',
        '  them: VC funded with vesting schedules',
        '  us:   no token, no investors',
        '',
        '  them: governance by token holders',
        '  us:   governed by code',
        '',
        '  them: marketing > technology',
        '  us:   technology speaks for itself',
        '',
        '[BLOCKCHAIN PLATFORMS]',
        '  them: gas fees, congestion, limits',
        '  us:   no fees, scales horizontally',
        '',
        '  them: proof of stake drama',
        '  us:   proof of execution',
        '',
        '  them: can fork, can reverse',
        '  us:   immutable by design',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'not saying they\'re bad.',
        'just saying we\'re different.',
        '',
        'very different.',
        '',
      ]);
    },
  },

  why: {
    name: 'why',
    execute: () => {
      return createResponse([
        'WHY THIS MATTERS NOW',
        '',
        'look around.',
        '',
        'every "decentralized" project has a CEO.',
        'every "permissionless" protocol has gatekeepers.',
        'every "trustless" system asks you to trust them.',
        '',
        'the web3 dream?',
        'captured by the same VCs that run web2.',
        '',
        'the blockchain revolution?',
        'turned into speculation theater.',
        '',
        'the cypherpunk vision?',
        'diluted into marketing speak.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'we\'re not here to play nice.',
        'we\'re here to build what should have been built.',
        '',
        'no compromise. no shortcuts.',
        'no "we\'ll decentralize later."',
        '',
        'decentralized NOW.',
        'permissionless NOW.',
        'unstoppable NOW.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'this matters because someone has to actually',
        'do what everyone else just talks about.',
        '',
        'might as well be us.',
        '',
      ]);
    },
  },

  revolution: {
    name: 'revolution',
    execute: () => {
      return createResponse([
        '┌────────────────────────────────────────────────────────┐',
        '│              THE SUDO REVOLUTION                       │',
        '└────────────────────────────────────────────────────────┘',
        '',
        'revolutions don\'t announce themselves.',
        'they just happen.',
        '',
        'one day, centralized systems will seem',
        'as absurd as centralized currency does to us now.',
        '',
        'one day, asking permission to execute code',
        'will feel as backwards as asking a king for permission to trade.',
        '',
        'one day, "who controls this?"',
        'won\'t even be a question people ask.',
        '',
        'because the answer will be obvious:',
        'nobody. everybody. the system.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'we\'re not starting a revolution.',
        'we\'re finishing one.',
        '',
        'the cypherpunks started it in the 90s.',
        'satoshi advanced it in 2009.',
        'ethereum expanded it in 2015.',
        '',
        'now we complete it.',
        '',
        'truly permissionless.',
        'truly unstoppable.',
        'truly runs itself.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'you\'re not watching history.',
        'you\'re in it.',
        '',
      ], 'system', true);
    },
  },

  defi: {
    name: 'defi',
    execute: () => {
      return createResponse([
        'SUDO & DEFI',
        '',
        'current defi has a problem:',
        '',
        'it runs on stuff that can be stopped.',
        '',
        'your DEX? depends on centralized RPC nodes.',
        'your lending platform? relies on centralized oracles.',
        'your "decentralized" exchange? hosted on AWS.',
        '',
        'one subpoena. one API change. one terms of service update.',
        'and it all stops.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'SUDO changes this.',
        '',
        'imagine defi that runs on a system',
        'that literally cannot be stopped.',
        '',
        '  >> no RPC providers to ban you',
        '  >> no hosting company to shut you down',
        '  >> no jurisdiction to regulate',
        '  >> no off switch',
        '',
        'that\'s defi on SUDO.',
        '',
        'not "decentralized until it isn\'t."',
        'actually decentralized.',
        '',
        'not "permissionless with terms of service."',
        'actually permissionless.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'the defi you were promised?',
        'we\'re building the foundation for it.',
        '',
      ]);
    },
  },

  web3: {
    name: 'web3',
    execute: () => {
      return createResponse([
        'REAL WEB3 INFRASTRUCTURE',
        '',
        'let\'s be honest about "web3":',
        '',
        'most of it runs on:',
        '  - AWS',
        '  - Cloudflare',
        '  - Alchemy/Infura',
        '  - Traditional DNS',
        '  - Centralized APIs',
        '',
        'that\'s not web3.',
        'that\'s web2 with a blockchain API.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'real web3 needs:',
        '',
        '[INFRASTRUCTURE] that can\'t be shut down',
        '[EXECUTION] that doesn\'t need permission',
        '[NETWORKING] that routes around censorship',
        '[STORAGE] that\'s truly distributed',
        '[IDENTITY] that\'s actually sovereign',
        '',
        'SUDO provides the execution layer.',
        '',
        'truly permissionless.',
        'actually decentralized.',
        'mathematically unstoppable.',
        '',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        '',
        'when historians write about the web3 era,',
        'they\'ll divide it into two phases:',
        '',
        'before: web2 infrastructure with crypto features',
        'after: actual decentralized infrastructure',
        '',
        'SUDO is that dividing line.',
        '',
      ]);
    },
  },
};

export const executeCommand = (input: string): CommandResponse => {
  const trimmed = input.trim().toLowerCase();

  if (!trimmed) {
    return createResponse(['']);
  }

  if (trimmed.startsWith('sudo ')) {
    const subCommand = trimmed.slice(5);
    if (subCommand) {
      return createResponse(
        [
          `sudo: ${subCommand}: command not found`,
          '',
          'or perhaps...',
          'you lack the authority.',
        ],
        'error',
        true
      );
    }
    return commands.sudo.execute();
  }

  const command = commands[trimmed];

  if (command) {
    return command.execute();
  }

  return createResponse(
    [`command not found: ${trimmed}`, '', 'try "help" for available commands'],
    'error'
  );
};

export const getVisibleCommands = (): Command[] => {
  return Object.values(commands).filter((cmd) => !cmd.hidden);
};
