const SIGNS = [
  {
    id: 'frihetsflamman',
    name: 'Frihetsflamman',
    symbol: '✦',
    startMonth: 3, startDay: 21, endMonth: 4, endDay: 19,
    tagline: 'Din kosmiska energi skriker efter frihet i alla dimensioner',
    personality: 'Du är den som instinktivt reagerar när någon försöker kontrollera andra. Medan dina vänner accepterar cookie-banners utan att blinka, läser du igenom hela integritetspolicyn. Stjärnorna har gett dig en ovanlig gåva: förmågan att se statlig övervakning i varje ny lag. Du har VPN på telefonen, Signal som standard och en åsikt om chattkontroll som du inte ens blev tillfrågad om.',
    prophecies: [
      'Merkurius retrograd varnar: undvik att diskutera massövervakning med din mormor denna vecka.',
      'En kosmisk vindkantring antyder att du snart kommer övertyga en kompis om vikten av krypterad kommunikation.',
      'Stjärnorna ser att du inom kort skriver en insändare om integritetsfrågor. Den blir viral.',
      'Pluto i transformation antyder att du snart ändrar åsikt om en fråga. Bara inte om frihet. Aldrig om frihet.',
      'En meteor av insikt kommer träffa dig: frihet och ansvar är två sidor av samma kosmiska mynt.',
      'Fullmånen avslöjar att du har rätt om det mesta. Speciellt om personlig integritet.',
      'Jupiter i ditt integritetshus avslöjar att du snart raderar en app som samlar för mycket data. Det känns befriande.',
      'En stjärnexplosion i ditt rebellhus ger dig mod att vägra ge ut ditt personnummer till en pizzeria.',
      'Saturnus linje genom ditt tecken antyder att du snart förklarar GDPR för någon som inte frågade.',
      'Kometens bana korsar ditt frihetskvarter: en politisk debatt i kön till korv kommer definiera din kväll.',
      'Neptunus i ditt digitala hus avslöjar: du snart installerar en ny integritetsvänlig app. Igen.',
      'En kosmisk störning i övervakningssystemet ger dig hopp. Kanske var det du som orsakade den.',
      'Venus i ditt skyddshus antyder att du snart övertygar en kompis att sluta använda ansiktsigenkänning som lås.',
      'Stjärnbilden Krypteraren lyser starkt ikväll. Den ger dig rätt att nörda ner dig i integritetsfrågor.',
      'Mars retrograd varnar: ditt nästa lösenord bör inte vara "frihet123". Var kreativare.'
    ],
    advice: [
      'Universum belönar den som står upp för andras fri- och rättigheter.',
      'Din lyckodag är idag. Speciellt om du försvarar någons rätt att vara ifred.',
      'Kosmiskt tips: nästa gång någon säger "jag har inget att dölja", fråga varför de har gardiner hemma.',
      'Stjärnorna råder dig att byta lösenord ikväll. Inte för att du måste, utan för att du kan.',
      'Universum viskar: den som överger frihet för trygghet förtjänar ingendera.',
      'Din kosmiska uppgift: påminn en vän om att integritet inte är en lyxvara.',
      'Kosmisk påminnelse: frihet är inte gratis, men den är ovärderlig.',
      'Stjärnorna ser styrka i den som vågar vara privat i en offentlig värld.',
      'Universum undrar: om du inte äger din data, vem gör det? Tänk på det.',
      'Kosmiskt råd: den bästa övervakningen är den du gör av makten. Inte tvärtom.'
    ]
  },
  {
    id: 'jordreformisten',
    name: 'Jordreformisten',
    symbol: '⬡',
    startMonth: 4, startDay: 20, endMonth: 5, endDay: 20,
    tagline: 'Stjärnorna har utsett dig till bostadsmarknadens kosmiska räddare',
    personality: 'Du drömmer inte om slott i molnen utan om en rimlig hyresrätt i centrala Lund. Din kosmiska uppgift är att ifrågasätta varför det är lättare att hitta en exoplanet än en studentlägenhet. Du vet att byggnormer inte borde vara mer komplicerade än kvantfysik. Din bostadskö-poäng är ditt mest imponerande CV-inslag.',
    prophecies: [
      'Venus lovade att alla skulle hitta en bostad snart. Venus ljög. Men det finns hopp i reformer.',
      'Stjärnorna ser en framtid där du äntligen hittar en studentbostad. Tyvärr ser de inte exakt när.',
      'Uranus i ditt tecken ger dig rebellisk energi. Kanalisera den mot onödiga byggregler.',
      'En planetarisk konjunktion antyder att hyresreglering snart blir ämnet som definierar din personlighet.',
      'Neptuns dimma lättar och avslöjar: friare byggregler hade faktiskt löst bostadsbristen. Vilken överraskning.',
      'Saturnus varnar: undvik att räkna på bostadspriser innan du somnar. Du kommer inte sova ändå.',
      'Månen i ditt fjärde hus avslöjar att din nästa lägenhet har ett fönster. Grattis, det är ett framsteg.',
      'En kosmisk jordbävning i bostadspolitiken är på väg. Du står redo med reformförslagen.',
      'Merkurius retrograd antyder att du snart hamnar i en diskussion om bruksvärdessystemet på en fest. Du vinner.',
      'Stjärnbilden Hyresrätten lyser starkt ikväll. Den ger dig mod att ifrågasätta varenda byggnorm.',
      'Neptunus i ditt bostadshus avslöjar: det finns fler regler för att bygga ett hus än för att resa till månen.',
      'Venus retrograd antyder att din relation till bostadsmarknaden snart tar en ny vändning. Äntligen.',
      'En kosmisk signal från Pluto: marknadshyror är inte ett skällsord. Det är en lösning.',
      'Jupiter i ditt fjärde hus expanderar dina väggar. Mentalt, alltså. Lägenheten är fortfarande 19 kvm.',
      'Solens strålar värmer din bostad. Om du hade en. Reformera byggreglerna och fråga igen.'
    ],
    advice: [
      'Sluta scrolla bostadsannonser i Mars retrograd. Vänta till nyår.',
      'Din kosmiska uppgift idag: förklara för en vän varför fri hyressättning inte är samma sak som kaos.',
      'Universum har en lägenhet åt dig. Den kräver bara lite politisk reform först.',
      'Kosmiskt tips: varje gång du ser en tom kontorsbyggnad, visualisera studentlägenheter.',
      'Stjärnorna säger: sluta acceptera bostadsbrist som naturlag. Det är en politisk konstruktion.',
      'Din lyckosten är en byggkran. Bär den med stolthet.',
      'Kosmisk visdom: den som accepterar köer som system har gett upp hoppet om förändring.',
      'Universum påminner: en bostad är en rättighet, men bostadspolitik borde inte vara ett lotteri.',
      'Stjärnorna viskar: fler bostäder byggs av friare regler, inte av fler utredningar.',
      'Din kosmiska superkraft: att se en framtid där studenter inte behöver bo i tält.'
    ]
  },
  {
    id: 'debattkometen',
    name: 'Debattkometen',
    symbol: '☄',
    startMonth: 5, startDay: 21, endMonth: 6, endDay: 20,
    tagline: 'Du lyser starkast i varje diskussion du passerar',
    personality: 'Du förvandlar varje middagsbjudning till en politisk debatt och varje fika till ett seminarium. Din kosmiska bana korsar alla ideologiska gränser och du samlar argument som andra samlar stjärntecken. Dina vänner har slutat bjuda dig på fredagsmys, men de ringer alltid dig inför val. Din Spotify Wrapped är 90% politiska poddar.',
    prophecies: [
      'En kosmisk energiöverföring gör att du plötsligt kan förklara hela det svenska skattesystemet. Använd kraften klokt.',
      'Stjärnorna ser en het debatt i din framtid. Du vinner den. Självklart.',
      'Jupiter i ditt sjunde hus lovar nya politiska kontakter. Minst en kommer ha starka åsikter om EU.',
      'En stjärnexplosion i ditt kommunikationshus ger dig mod att prata politik med främlingar på karnevalen.',
      'Månförmörkelsen avslöjar din hemlighet: du tycker politik är roligare än Netflix.',
      'Merkurius ger dig ordets gåva denna vecka. Alla veckor, egentligen.',
      'Venus i ditt tredje hus antyder en romantisk koppling till någon du debatterade med. Passion tar många former.',
      'En kosmisk signal: du kommer snart hitta det perfekta argumentet i duschen. Skriv ner det denna gång.',
      'Pluto i ditt kommunikationshus ger dig kraften att sammanfatta en hel ideologi i en mening. Använd den på karnevalen.',
      'Stjärnorna varnar: undvik att starta en debatt om NATO innan du har ätit. Lågt blodsocker gör dig orimlig.',
      'Neptunus avslöjar: du snart formulerar ett argument så skarpt att det borde patenteras.',
      'En kosmisk debattvind blåser genom ditt tecken: någon på karnevalen behöver höra din åsikt om yttrandefrihet.',
      'Uranus i ditt kommunikationshus ger dig kraften att förklara hela demokratins historia i en mening. Prova.',
      'Fullmånen i ditt retorikhus lyser upp en blind fläck i din argumentation. Fixera den innan nästa debatt.',
      'Mars och Venus i ditt debatthus: din passion för demokrati är attraktiv. Bokstavligen.'
    ],
    advice: [
      'Var modig nog att vara den som säger det alla tänker men ingen vågar säga.',
      'Kosmisk visdom: den bästa debatten är den där alla lär sig något. Även du.',
      'Nästa gång någon säger "vi pratar inte politik vid bordet" — byt bord.',
      'Stjärnorna påminner: att lyssna är inte samma sak som att vänta på sin tur att prata.',
      'Universum belönar den som ändrar åsikt när bevisen ändras. Prova ibland.',
      'Kosmiskt tips: ditt starkaste argument ikväll är frågan ingen annan ställer.',
      'Kosmisk sanning: demokrati är inte ett tillstånd. Det är en daglig övning.',
      'Stjärnorna råder dig: den som har de starkaste åsikterna borde också ha de öppnaste öronen.',
      'Universum viskar: en debatt utan respekt är bara bråk med publik.',
      'Din lyckoplanet ikväll: den som skyddar yttrandefriheten, även för dem du inte håller med.'
    ]
  },
  {
    id: 'trygghetsnovan',
    name: 'Trygghetsnovan',
    symbol: '◈',
    startMonth: 6, startDay: 21, endMonth: 7, endDay: 22,
    tagline: 'Du exploderar av engagemang för ett samhälle där alla kan blomstra',
    personality: 'Du är den i kompisgänget som alltid ser till att alla har det bra. Stjärnorna har gett dig en unik förmåga att förstå att grundtrygghet inte handlar om bidrag utan om att ge alla en chans att forma sina egna liv. Du har åtminstone tre Excel-ark som bevisar att negativ inkomstskatt fungerar. Ditt hjärta är stort men dina reformförslag är ännu större.',
    prophecies: [
      'Neptuns dimma lättar: du inser att negativ inkomstskatt faktiskt är ganska enkelt att förklara. I alla fall efter fjärde ölen.',
      'Stjärnorna antyder att du snart hittar en själsfrände som också brinner för välfärdsreformer. Romantiskt? Kanske.',
      'En kosmisk våg av empati sveper över dig. Du kände den redan. Men nu blir den politisk.',
      'Månen i konjunktion med Jupiter lovar: din idé om personliga trygghetskonton kommer bli verklighet. Ge det tid.',
      'Saturnus lär dig tålamod. Reformer tar tid, men stjärnorna garanterar att du är på rätt sida av historien.',
      'En supernova av insikt: valfrihet i välfärden är inte egoism, det är respekt.',
      'Merkurius i ditt omsorgshus avslöjar: du snart förklarar negativ inkomstskatt med servettsteckning. Det funkar.',
      'Venus lovar att din empati smittar av sig ikväll. Minst en person går hem med nya åsikter om välfärd.',
      'En kosmisk puls genom ditt tecken: grundtrygghet frigör kreativitet. Du är levande bevis.',
      'Mars ger dig energi att argumentera mot byråkrati. Systemet ska tjäna människor, inte tvärtom.',
      'Neptuns vågor bär med sig en insikt: den som förenklar bidragssystemet räddar fler än den som höjer bidragen.',
      'En kosmisk puls genom ditt omsorgskvarter: du snart förklarar hur personliga trygghetskonton funkar. Med PowerPoint.',
      'Uranus i ditt reformhus ger dig modet att ifrågasätta varför välfärden belönar passivitet istället för initiativ.',
      'Stjärnbilden Skyddsnätet lyser ikväll. Den påminner dig om att trygghet och frihet förstärker varandra.',
      'Fullmånen avslöjar: ditt engagemang för grundtrygghet smittar av sig. Någon tänker om sina åsikter just nu.'
    ],
    advice: [
      'Lita på galaxen: den som vill att alla ska ha det bra är inte naiv, utan modig.',
      'Kosmiskt tips: kombinera ditt stora hjärta med smarta reformförslag. Gör båda samtidigt.',
      'Stjärnorna ser potential i dig. Slösa den inte på system som inte fungerar.',
      'Universum påminner: frihet utan trygghet är bara frihet för de starka.',
      'Din kosmiska superkraft är att bry dig utan att bli bitter. Behåll den.',
      'Kosmisk visdom: det bästa skyddsnätet är det som hjälper folk att klättra, inte bara falla mjukt.',
      'Stjärnorna viskar: empati utan handling är bara sentimentalitet. Du har båda.',
      'Kosmisk påminnelse: ett system som är för krångligt att förstå är för krångligt för att fungera.',
      'Universum belönar den som designar trygghet som en språngbräda, inte en hängmatta.',
      'Din kosmiska uppgift: visa att omtanke och reformvilja inte är varandras motsatser.'
    ]
  },
  {
    id: 'landsbygdslejonet',
    name: 'Landsbygdslejonet',
    symbol: '☀',
    startMonth: 7, startDay: 23, endMonth: 8, endDay: 22,
    tagline: 'Du regerar med stolthet över hela Sverige, inte bara storstäderna',
    personality: 'Medan andra stirrar i sina telefoner blickar du ut över åkrar och skogar och ser framtidens gröna energi. Du vet att Sverige är större än Södermalm och att de bästa idéerna ofta kommer från platser utan tunnelbana. Din kosmiska kraft är att påminna storstadsbor om var maten faktiskt kommer ifrån. Du har mobildata som livlina och en bestämd åsikt om Trafikverket.',
    prophecies: [
      'Månen i konjunktion med Jupiter lovar: en överraskande insikt om kommunalt självstyre kommer förändra din syn på lokalpolitik.',
      'Stjärnorna ser att du snart stöter på en artikel om landsbygdsutveckling. Läs den. Den bekräftar allt du redan vet.',
      'Solens fläckar antyder att Stockholm-perspektivet dominerar debatten igen. Du vet bättre.',
      'En kosmisk vindkantring antyder att decentralisering snart blir trendigt. Du var först.',
      'Jupiter expanderar din vision: hela Sverige ska leva. Inte bara innerstan.',
      'Mars energi driver dig att starta en rörelse för bättre bredband i glesbygden. Gör det.',
      'Saturnus påminner: avståndet till närmaste sjukhus är inte en triviatråga. Det är politik.',
      'En kosmisk signal från norr: nästa gång någon säger "flytta till stan" får du kosmisk rätt att himla med ögonen.',
      'Venus i ditt lokala hus antyder att du snart inspirerar någon att öppna ett café på landsbygden.',
      'Fullmånen lyser över hela Sverige, inte bara Stureplan. Precis som din politik.',
      'Neptunus avslöjar: någon i stan fantiserar i hemlighet om att flytta till landet. Du är deras förebild.',
      'En kosmisk signal från Norrland: kommunalt självstyre är inte en önskan, det är en nödvändighet.',
      'Uranus i ditt regionala hus ger dig mod att starta en debatt om varför allt centraliseras till Stockholm.',
      'Stjärnbilden Fiberkabeln lyser starkt ikväll. Den ger dig hopp om digital infrastruktur i hela landet.',
      'Venus i ditt lokala hus antyder att lanthandeln snart får en renässans. Du jublar redan.'
    ],
    advice: [
      'Kosmisk visdom: den som förstår hela landet förstår framtiden.',
      'Bär din kärlek till landsbygden med stolthet. Universum behöver mer av det.',
      'Nästa gång en stockholmare klagar på avståndet till närmaste café, berätta om verkliga avstånd.',
      'Stjärnorna säger: den bästa regionalpolitiken är den som gör sig själv överflödig.',
      'Kosmiskt tips: lokal stolthet är inte nostalgi. Det är en framtidsstrategi.',
      'Universum påminner: fiber till byn är inte en lyx. Det är infrastruktur.',
      'Kosmisk sanning: Sveriges framtid avgörs inte bara i riksdagen. Den avgörs i varje kommun.',
      'Stjärnorna ser att du förstår något andra missar: avstånd är inte bara kilometer. Det är politik.',
      'Universum viskar: den som bygger upp glesbygden bygger upp hela landet.',
      'Din kosmiska superkraft: att se potential där andra bara ser skog och tystnad.'
    ]
  },
  {
    id: 'kunskapsnebulan',
    name: 'Kunskapsnebulan',
    symbol: '✧',
    startMonth: 8, startDay: 23, endMonth: 9, endDay: 22,
    tagline: 'Din kunskapstörst sträcker sig bortom universums gränser',
    personality: 'Du har fler flikar öppna i din webbläsare än det finns stjärnor på himlen. Din kosmiska gåva är förmågan att ifrågasätta varför helårsprestationer ska styra universitetens finansiering. Du drömmer om en värld där forskningsresultat är fria som stjärnljus och utbildningens kvalitet mäts i kunskap, inte poäng. Ditt favoritord är "källa?" och du menar det varje gång.',
    prophecies: [
      'Merkurius ger dig insikten: akademisk frihet är inte förhandlingsbar. Stjärnorna instämmer.',
      'En kosmisk signal antyder att du snart ifrågasätter hela högskolans finansieringsmodell. Igen.',
      'Stjärnorna ser att du hittar en forskningsartikel som förändrar allt. Den är open access, förstås.',
      'Venus i ditt kunskapshus lovar: din nästa tentaperiod går bättre än du tror. Sluta stressa.',
      'Saturnus påminner: utbildning är en investering, inte en kostnad. Berätta det för finansministern.',
      'En nebulosa av kunskap sänker sig över dig. Du visste redan allt den innehöll.',
      'Jupiter i ditt akademiska hus avslöjar att du snart hittar en professor som delar din vision om fria forskningsresultat.',
      'Pluto i transformation: du ändrar studieteknik mitt i terminen. Det fungerar faktiskt bättre.',
      'Månens gravitation drar dig mot biblioteket igen. Du hade inte planerat det, men du är inte förvånad.',
      'En kosmisk kollision mellan planeter speglar din inre konflikt: plugga till tentan eller läsa något intressant istället.',
      'Neptunus avslöjar: det där seminariet du tvekade att gå på? Gå. Det förändrar din syn på allt.',
      'Uranus i ditt forskningshus ger dig mod att ifrågasätta varför helårsprestationer styr högskolans budget.',
      'En kosmisk våg av open access sveper över akademin. Du surfar redan på den.',
      'Stjärnbilden Källkritikern lyser extra starkt ikväll. Den påminner dig om att evidens trumfar åsikter.',
      'Mars i ditt kunskapshus driver dig att starta en studiecirkel. Ämne: varför utbildningspolitik borde vara intressant.'
    ],
    advice: [
      'Din kosmiska uppgift: kämpa för att forskningens resultat tillhör alla, inte förlagen.',
      'Universum belönar nyfikenhet. Fortsätt ifrågasätta allt, inklusive ifrågasättandet.',
      'Kosmiskt tips: dela din kunskap generöst. Universum gillar inte kunskapshoarders.',
      'Stjärnorna råder dig: citera dina källor. Även i vardagliga samtal.',
      'Universum viskar: den som slutar lära sig har slutat leva.',
      'Kosmisk påminnelse: att inte veta är början på att förstå. Fråga oftare.',
      'Stjärnorna ser dig i bibliotekets ljus: kunskap är frihet i sin renaste form.',
      'Kosmisk visdom: den bästa utbildningspolitiken är den som litar på studenternas nyfikenhet.',
      'Universum påminner: en investering i forskning är en investering i framtiden. Berätta det för alla.',
      'Din kosmiska superkraft: att göra komplicerad kunskap begriplig. Använd den generöst.'
    ]
  },
  {
    id: 'rattvisevagen',
    name: 'Rättvisevågen',
    symbol: '⚖',
    startMonth: 9, startDay: 23, endMonth: 10, endDay: 22,
    tagline: 'Du väger varje lag mot frihetens gyllene standard',
    personality: 'Du är den som läser grundlagen för nöjes skull. Stjärnorna har placerat dig i evig balans mellan ordning och frihet, och du lutar alltid åt frihetens sida. Du vet att kryptering är en mänsklig rättighet och att massövervakning aldrig blir okej bara för att politikerna kallar det "trygghet". Du har Europakonventionen som bokmärke i telefonen.',
    prophecies: [
      'Stjärnorna antyder att din nästa stora debatt handlar om rättsstatens principer. Du kommer vinna.',
      'En kosmisk konjunktion avslöjar: avkriminalisering av droger för eget bruk är mer kontroversiellt på middagar än i forskningen.',
      'Månen viskar att grundlagsändringar borde kräva två tredjedels majoritet. Du nickade redan.',
      'Pluto i ditt rättvisehus ger dig energi att kämpa mot chattkontroll och massövervakning.',
      'Stjärnbilden Fyrklövern (ja, den finns nu) lovar att den som försvarar rättsstaten aldrig går vilse.',
      'Merkurius retrograd varnar: diskutera inte straffrätt med folk som tror att hårdare straff löser allt.',
      'Saturnus ringer i ditt rättssäkerhetshus: någon du känner behöver höra om proportionalitetsprincipen ikväll.',
      'En kosmisk dom har fallit: du hade rätt hela tiden. Speciellt om evidensbaserad narkotikapolitik.',
      'Jupiter i ditt sjunde hus antyder en ny allians. Ni förenas av övertygelsen att rättssäkerhet inte är förhandlingsbart.',
      'Venus och Mars i konjunktion: din passion för rättvisa attraherar likasinnade. Universum matchar er.',
      'Neptunus i ditt rättvisehus avslöjar: evidensbaserad politik är sexigare än populism. Du visste det redan.',
      'Uranus ger dig modet att nämna avkriminalisering på middagen. Stämningen dör, men debatten lever.',
      'En kosmisk dom i ditt proportionalitetshus: hårdare straff utan evidens är inte rättvisa. Det är hämnd.',
      'Stjärnbilden Rättssäkerheten lyser ikväll. Den påminner dig om att principer inte har undantag.',
      'Fullmånen avslöjar: du snart hittar en paragraf som ingen annan har läst. Den förändrar hela argumentet.'
    ],
    advice: [
      'Fråga dig själv: vad skulle en fri tänkare göra? Gör sedan det.',
      'Kosmisk sanning: frihet utan rättvisa är kaos, rättvisa utan frihet är tyranni. Du balanserar båda.',
      'Stjärnorna råder dig att alltid läsa det finstilta. Speciellt i nya lagförslag.',
      'Universum påminner: den som offrar andras frihet för sin egen trygghet förtjänar respekt för ärligheten, men inte inflytande.',
      'Kosmiskt tips: rättvisa kräver inte perfekta svar. Bara ärliga frågor.',
      'Din lyckoplanet är den som skyddar minoriteten från majoritetens godtycke.',
      'Kosmisk visdom: den bästa lagen är den som skyddar den svagaste medborgaren.',
      'Stjärnorna viskar: rättsstaten är inte en självklarhet. Den måste försvaras varje dag.',
      'Universum belönar den som ställer obekväma frågor om rättssystemet. Fortsätt.',
      'Din kosmiska uppgift: påminn någon om att rättvisa inte är samma sak som vedergällning.'
    ]
  },
  {
    id: 'reformrebellen',
    name: 'Reformrebellen',
    symbol: '⚡',
    startMonth: 10, startDay: 23, endMonth: 11, endDay: 21,
    tagline: 'Du river ner gamla system och bygger nya galaxer i deras ställe',
    personality: 'Du ser en skatteblankett och tänker "det här kan göras enklare." Din kosmiska energi driver dig att ifrågasätta varför RUT-avdrag existerar när man bara kan sänka skatten istället. Dina vänner tycker du pratar för mycket om skattepolitik på fester, men de frågar dig alltid om sin deklaration. Du har en stark åsikt om varje rad i statsbudgeten.',
    prophecies: [
      'Mars energi driver dig att skriva en insändare om avskaffad statlig inkomstskatt. Gör det. Världen behöver det.',
      'Kometens bana korsar ditt ekonomiska hus: det är dags att fråga varför staten ska välja vilka som får subventioner.',
      'Stjärnorna ser en framtid med enhetlig moms. Du ler redan.',
      'Uranus ger dig modet att föreslå fastighetsskatt på middagen. RIP stämningen, men du har rätt.',
      'En kosmisk energiöverföring gör dig till den mest övertygande skatteexperten på hela karnevalen.',
      'Saturnus varnar: sluta räkna marginalskatt i huvudet. Njut av kvällen. Räkna imorgon.',
      'Merkurius i ditt reformhus antyder att du snart förklarar Lafferkurvan för en bartender. Hen blir övertygad.',
      'En stjärnexplosion i ditt skattehus: du inser att avdrag bara är krångliga skattesänkningar. Förenkla.',
      'Pluto ger dig kraften att ifrågasätta varenda subvention. Börja med den ingen vågar röra.',
      'Fullmånen lyser upp din skattedeklaration. Du ser tre förenklingar direkt.',
      'Neptunus i ditt reformhus avslöjar: platt skatt låter extremt tills man jämför med det nuvarande systemet.',
      'En kosmisk bubbla i subventionshuset spricker: pengarna hade gjort mer nytta i medborgarnas fickor.',
      'Uranus ger dig mod att räkna ut exakt hur mycket skatt du betalar i procent. Du kommer bli upprörd.',
      'Stjärnbilden Förenklingen lyser ikväll. Den ger dig inspiration att rita ett enklare skattesystem på en servett.',
      'Venus i ditt effektivitetshus antyder att du snart övertalar någon om att avdrag inte är samma sak som skattesänkningar.'
    ],
    advice: [
      'Kosmiskt tips: reformer kräver mod. Du har gott om det.',
      'Universum belönar den som förenklar det komplicerade.',
      'Nästa gång någon säger att skatter inte kan sänkas, fråga dem var pengarna tar vägen.',
      'Stjärnorna påminner: det enklaste systemet är ofta det rättvisaste.',
      'Kosmisk visdom: varje krångligt avdrag är en missad chans att bara sänka skatten.',
      'Din lyckodag är deklarationsdagen. Seriöst. Du ser fram emot den.',
      'Kosmisk sanning: den som kan förklara sin skattepolitik på en minut har förstått den. Kan du?',
      'Stjärnorna viskar: ekonomisk frihet är frihet. Punkt.',
      'Universum påminner: varje skatt som inte går att motivera borde inte finnas.',
      'Din kosmiska superkraft: att se krångel där andra ser tradition, och föreslå bättre.'
    ]
  },
  {
    id: 'diplomatidraken',
    name: 'Diplomatidraken',
    symbol: '◇',
    startMonth: 11, startDay: 22, endMonth: 12, endDay: 21,
    tagline: 'Du flyger över gränser och sprider frihet i ditt kölvatten',
    personality: 'Du har en jordglob på skrivbordet och åsikter om varje land på den. Stjärnorna har gett dig förmågan att se hur allt hänger ihop: handel, fred, mänskliga rättigheter och det nordiska samarbetet. Du är den som påpekar att värnplikt kanske inte är det friaste sättet att försvara friheten. Din telefon har fler nyhetsappar än spel.',
    prophecies: [
      'Stjärnorna ser att du inom kort imponerar på någon med din kunskap om nordiskt försvarssamarbete.',
      'Jupiter expanderar din världsbild ytterligare. Du trodde inte det var möjligt.',
      'Neptuns tidvatten drar dig mot en djupare förståelse av varför frihandel gynnar alla.',
      'En kosmisk allians bildas i ditt internationella hus. NATO nickar godkännande.',
      'Venus antyder att din nästa dejt börjar med en diskussion om EU:s utrikespolitik. Det går bättre än du tror.',
      'Månen avslöjar att du i hemligheten fantiserar om att bli FN-ambassadör. Sikta på det.',
      'Mars i ditt internationella hus ger dig modet att ifrågasätta värnplikten på en middag. Stämningen överlever.',
      'En kosmisk diplomat klappar dig på axeln: du har rätt om att frihandel lyfter fler ur fattigdom än bistånd.',
      'Saturnus linje genom ditt tecken antyder att ditt nästa resemål väljs utifrån geopolitiskt intresse. Igen.',
      'Merkurius retrograd varnar: undvik att förklara det nordiska samarbetets historia efter midnatt. Ingen orkar.',
      'Neptunus i ditt diplomatiska hus avslöjar: du snart löser en internationell konflikt. I en kommentarstråd, men ändå.',
      'En kosmisk allians formas mellan ditt tecken och Vattumannen: ni delar övertygelsen om att frihandel fungerar.',
      'Uranus ger dig modet att ifrågasätta värnplikten med konkreta argument. Folk lyssnar denna gång.',
      'Stjärnbilden Handelsavtalet lyser starkt ikväll. Den bekräftar att öppenhet är styrka.',
      'Mars i ditt försvarshus antyder att du snart förklarar skillnaden mellan försvar och militarism. Viktigt.'
    ],
    advice: [
      'Kosmisk visdom: den som förstår världen kan förändra den.',
      'Universum har inga gränser. Ditt engagemang borde inte ha det heller.',
      'Stjärnorna påminner: mänskliga rättigheter är universella. Punkt.',
      'Kosmiskt tips: fred byggs inte med murar utan med handelsavtal och studentutbyten.',
      'Din kosmiska uppgift: påminn någon om att världen är större än Sverige, men att Sverige kan göra världen bättre.',
      'Universum belönar den som ser gränser som möjligheter, inte hinder.',
      'Kosmisk sanning: den starkaste försvarslinjen är den som aldrig behöver användas.',
      'Stjärnorna viskar: diplomati kräver tålamod. Du har det — i alla fall mer än de flesta.',
      'Universum påminner: frihet som inte gäller alla gäller ingen. Tänk globalt.',
      'Din kosmiska superkraft: att se samband mellan länder där andra bara ser gränser.'
    ]
  },
  {
    id: 'marknadsmystikern',
    name: 'Marknadsmystikern',
    symbol: '❖',
    startMonth: 12, startDay: 22, endMonth: 1, endDay: 19,
    tagline: 'Du läser marknaden som andra läser stjärnbilder',
    personality: 'Du ser utbud och efterfrågan i allt, från kötiden till Kåren till priset på en korv vid karnevalen. Din kosmiska vision är en värld där staten inte väljer vinnare och förlorare på marknaden. Du har förklarat varför hyresreglering är dåligt för minst tio personer den här veckan. Du räknar tips i procent och ifrågasätter prissättningen på nationsöl.',
    prophecies: [
      'Solens fläckar antyder turbulens i ekonomin. Du vet redan vilka reformer som behövs.',
      'En asteroid passerar ditt karriärhus. Marknaden öppnar sig för den som vågar.',
      'Stjärnorna bekräftar: ja, fri prisbildning är bättre. Du behövde inte stjärnorna för att veta det.',
      'Merkurius i ditt ekonomihus ger dig superkraften att förklara marknadsekonomi utan att folk somnar.',
      'Kometsvansen pekar mot framtiden: den tillhör entreprenörerna och de fria tänkarna.',
      'Venus i ditt andra hus antyder ekonomiskt uppsving. Eller så är det bara inflationen.',
      'Jupiter expanderar ditt ekonomiska tänkande: du ser en marknadslösning i varje köproblem.',
      'Mars ger dig energi att starta ett sidoprojekt. Universum subventionerar det inte. Det behövs inte.',
      'Saturnus påminner: konkurrens är inte ett hot. Det är evolutionens ekonomiska form.',
      'En kosmisk bubbla spricker i din närvaro. Du varnade för den. Ingen lyssnade.',
      'Neptunus i ditt marknadshus avslöjar: avreglering låter skrämmande tills man ser resultaten.',
      'Uranus ger dig modet att föreslå fri prisbildning på nationsöl. Revolutionärt.',
      'En kosmisk korrigering sker i ditt tecken: marknaden hittar alltid rätt pris. Politiken sällan.',
      'Stjärnbilden Entreprenören lyser ikväll. Den påminner dig om att varje företag en gång var en idé.',
      'Fullmånen i ditt innovationshus avslöjar: konkurrens är inte ett nollsummespel. Alla kan vinna.'
    ],
    advice: [
      'Kosmiskt tips: marknaden belönar den modige. Starta det där projektet.',
      'Universum fungerar på utbud och efterfrågan. Politiken borde också göra det.',
      'Lita på den osynliga handen. Den vet vad den gör. Oftast.',
      'Stjärnorna råder dig: nästa gång någon säger "marknaden har misslyckats", fråga vilken marknad de menar.',
      'Kosmisk visdom: det bästa sättet att hjälpa konsumenter är att låta dem välja själva.',
      'Universum påminner: innovation kommer från frihet, inte från femårsplaner.',
      'Kosmisk sanning: den bästa regleringen är den som skapar spelregler, inte väljer spelare.',
      'Stjärnorna viskar: en fri marknad är inte perfekt, men den är bättre än alla alternativ.',
      'Universum belönar den som ser möjligheter i problem. Du gör det redan.',
      'Din kosmiska uppgift: visa att egenintresse och samhällsnytta inte är varandras fiender.'
    ]
  },
  {
    id: 'grona-galaxen',
    name: 'Gröna Galaxen',
    symbol: '❋',
    startMonth: 1, startDay: 20, endMonth: 2, endDay: 18,
    tagline: 'Du brinner grönt för en hållbar framtid i hela universum',
    personality: 'Du vet att klimatfrågan inte löses med förbud utan med smarta incitament. Stjärnorna har gett dig insikten att ett enhetligt koldioxidpris är sexigare än subventioner. Du är den som förklarar varför kommunalt vindkraftsveto är dåligt för planeten, och du gör det med ett leende. Du sorterar sopor med en precision som imponerar på dina grannar.',
    prophecies: [
      'Galaxens centrum sänder ett meddelande: det är okej att vara liberal och bry sig om klimatet samtidigt.',
      'En supernova av grön energi lyser upp din framtid. Vindkraft, solkraft, kärnkraft. Allt fossilfritt.',
      'Stjärnorna ser att du snart övertalar en klimatskeptiker med marknadslösningar istället för moralpredikningar.',
      'Neptuns is smälter, bokstavligen. Men du har redan en plan som inte involverar mer statliga subventioner.',
      'Jupiter i ditt gröna hus lovar: koldioxidskatten fungerar. Berätta det för alla som vill lyssna.',
      'En kosmisk vindkantring antyder att kärnkraft och vindkraft kan samexistera. Du visste det redan.',
      'Venus i ditt hållbarhetshus lovar: du inspirerar någon att tänka om sin energiförbrukning ikväll. Med charm, inte skuld.',
      'Saturnus påminner dig om att klimatomställning tar tid. Men du har redan börjat.',
      'Merkurius retrograd varnar: undvik att diskutera flygskatt efter tredje ölen. Nyanserna försvinner.',
      'En kosmisk fusion av energikällor lyser upp din framtid: teknikneutralitet är din superkraft.',
      'Neptunus i ditt gröna hus avslöjar: koldioxidskatt är inte bestraffning. Det är prissättning av verkligheten.',
      'Uranus ger dig mod att försvara kärnkraft på en miljöfest. Du överlever. Precis.',
      'En kosmisk vindkantring i ditt energihus: kommunalt vindkraftsveto kostar mer än det smakar.',
      'Stjärnbilden Solpanelen lyser extra starkt ikväll. Ironiskt nog behöver den ingen sol.',
      'Mars i ditt klimathus driver dig att skriva en motion om teknikneutral klimatpolitik. Gör det.'
    ],
    advice: [
      'Kosmisk sanning: klimatpolitik och liberal politik är inte varandras motsatser.',
      'Universum är grönt i hjärtat. Precis som du.',
      'Nästa gång någon ger dig ett antingen-eller om klimat vs. tillväxt: vägra välj.',
      'Kosmiskt tips: det bästa klimatargumentet är det som fungerar, inte det som känns bäst.',
      'Stjärnorna råder dig: prissätt utsläppen och låt marknaden göra resten.',
      'Din kosmiska uppgift: bevisa att man kan älska tillväxt och planeten samtidigt.',
      'Kosmisk visdom: den som löser klimatfrågan med förbud har missförstått både klimat och människor.',
      'Stjärnorna viskar: varje kilowattimme fossilfri energi är en seger. Oavsett källa.',
      'Universum påminner: den gröna omställningen vinner på att vara smart, inte sur.',
      'Din kosmiska superkraft: att se klimatomställningen som en möjlighet, inte en uppoffring.'
    ]
  },
  {
    id: 'integrationsstjarnan',
    name: 'Integrationsstjärnan',
    symbol: '⊹',
    startMonth: 2, startDay: 19, endMonth: 3, endDay: 20,
    tagline: 'Du lyser för en öppnare och mer tolerant värld',
    personality: 'Du ser ingen motsättning mellan trygghet och öppenhet. Stjärnorna har gett dig förmågan att förstå att rörlighet är en grundläggande frihet och att integration handlar om möjligheter, inte tvång. Du är den som alltid har den mest nyanserade åsikten i migrationsdebatten, vilket irriterar alla sidor lika mycket. Du har vänner från fler länder än de flesta kan peka ut på en karta.',
    prophecies: [
      'Din kosmiska kompatibilitet med människor från alla bakgrunder är astronomiskt hög just nu.',
      'Stjärnorna ser att du snart för en viktig diskussion om frihet och rörlighet. Den gör skillnad.',
      'Månen i ditt toleranshus lyser extra starkt: din öppenhet inspirerar andra.',
      'En kosmisk bro byggs mellan kulturer i din närhet. Du är arkitekten.',
      'Venus antyder att din nästa nära vänskap korsar en kulturell gräns. Det berikar er båda.',
      'Saturnus lär dig tålamod med dem som ännu inte förstår att mångfald är en styrka.',
      'Jupiter i ditt mångfaldshus expanderar din krets: nya perspektiv väntar runt hörnet.',
      'Merkurius ger dig orden att förklara att integration inte är assimilering. Folk lyssnar ikväll.',
      'En kosmisk signal: du snart delar en måltid med någon vars livshistoria vidgar din värld.',
      'Mars energi driver dig att starta en konversation som bryter ner ett fördomar. Bara en räcker ikväll.',
      'Neptunus i ditt toleranshus avslöjar: den mest nyanserade åsikten i rummet tillhör dig. Igen.',
      'En kosmisk bro lyser upp i ditt tecken: du snart kopplar ihop två människor som aldrig annars mötts.',
      'Uranus ger dig modet att säga det uppenbara: integration handlar om möjligheter, inte om tvång.',
      'Stjärnbilden Mångfalden lyser ikväll. Den påminner dig om att olikhet är styrka, inte hot.',
      'Fullmånen avslöjar: din förmåga att se individen bakom statistiken gör dig till en bättre människa och politiker.'
    ],
    advice: [
      'Kosmiskt tips: nuans är en superkraft i en polariserad värld. Använd den.',
      'Universum har inga gränser. Våra borde vara färre.',
      'Stjärnorna påminner: den starkaste gemenskapen byggs av olikheter.',
      'Kosmisk visdom: den som bara umgås med likasinnade missar halva universum.',
      'Din lyckoplanet är rörlighet. Fysisk, social och intellektuell.',
      'Universum påminner: öppenhet är inte naivitet. Det är styrka med självförtroende.',
      'Kosmisk sanning: den som bygger broar bygger framtiden. Den som bygger murar bygger museer.',
      'Stjärnorna viskar: varje människa du möter bär på en historia värd att höra.',
      'Universum belönar den som ser bortom etiketter och hittar människan bakom.',
      'Din kosmiska uppgift: visa att tolerans inte är likgiltighet, utan aktiv respekt.'
    ]
  }
];

const SHARED_CTAS = [
  'Stjärnorna har talat. Nu är det din tur att agera.',
  'Ditt horoskop är tydligt:',
  'Universum har gett dig ett tecken. Bokstavligen.',
  'Fyrklövern kallar dig.',
  'Kosmisk sammanfattning: du hör hemma bland fria tänkare.',
  'Stjärnorna ljuger aldrig. I alla fall inte ikväll.',
  'Galaxen har en plats för dig. Den är grön och luktar fyrklöver.',
  'Det kosmiska rådet har röstat. Du borde bli medlem.',
  'Planeterna är i linje. Du borde vara det också.',
  'Stjärnhimlen pekar nedåt. Mot Swish-knappen.'
];

const SEEKING_GUIDANCE = {
  svar: [
    'Svaren du söker finns redan inom dig. Stjärnorna bekräftar bara det du redan vet.',
    'Kosmos viskar: den som frågar har redan halva svaret. Den andra halvan finns i politiken.',
    'Klarhet kommer inte från ovan — den kommer från att läsa på och bilda sig en egen åsikt.',
    'Stjärnorna avslöjar: sanningen är sällan enkel, men alltid värd att söka.',
    'Ditt kosmiska svar: lita på fakta, inte på magkänsla. Förutom just nu, för det här är ett horoskop.',
    'Universum säger att alla svar börjar med en bra fråga. Ställ fler av dem.',
    'Den kosmiska visdomen är tydlig: sök förståelse före åsikt, och åsikt före fördomar.',
    'Galaxen påminner dig: att ändra uppfattning när bevisen ändras är inte svaghet. Det är intellektuell styrka.'
  ],
  mod: [
    'Stjärnorna ser mod i ditt tecken. Använd det för att stå upp för det du tror på.',
    'Kosmos ger dig en spark: det där du har velat säga länge? Säg det ikväll.',
    'Mod är inte avsaknad av rädsla. Det är att debattera skattepolitik på en fest ändå.',
    'Universum belönar den som vågar ifrågasätta konsensus. Var den personen.',
    'Din kosmiska kraft ikväll: modet att försvara en impopulär men genomtänkt åsikt.',
    'Stjärnorna viskar: den som aldrig tar ställning tar ändå ställning — för status quo.',
    'Galaxen ser att du är redo att kliva fram. Det finns folk som behöver höra det du har att säga.',
    'Kosmisk energi strömmar genom dig: våga vara den som startar samtalet alla andra undviker.'
  ],
  lugn: [
    'Universum påminner dig: inte varje debatt behöver vinnas ikväll. Ibland räcker det att så ett frö.',
    'Stjärnorna ordinerar lugn. Världen förändras inte på en kväll, men din inställning kan göra det.',
    'Kosmisk balans uppnås inte genom att skrika högst, utan genom att lyssna längst.',
    'Galaxen viskar: ta ett steg tillbaka och se helheten. Perspektiv är underskattat.',
    'Stjärnorna ser att du bär världens problem. Lägg ner dem en stund. De finns kvar imorgon.',
    'Kosmos råder dig: andas. Reformer tar tid. Tålamod är också en form av mod.',
    'Din kosmiska uppgift ikväll är att vila i vetskapen att du gör tillräckligt. Det gör du.',
    'Universum säger: den som hittar lugn mitt i kaoset hittar också de bästa lösningarna.'
  ],
  aventyr: [
    'Stjärnorna pekar mot det okända. Följ dem — de bästa idéerna finns utanför komfortzonen.',
    'Kosmos uppmanar dig: prata med någon du aldrig skulle pratat med. Nya perspektiv väntar.',
    'Universum har planerat ett äventyr åt dig ikväll. Det börjar med att du säger ja.',
    'Galaxen viskar: den som aldrig utforskar nya idéer lever i samma galax hela livet.',
    'Din kosmiska bana korsar nya territorier. Våga smaka på en åsikt du aldrig provat förut.',
    'Stjärnorna ser en oväntad allians i din framtid. Den börjar med en konversation ikväll.',
    'Kosmos belönar den nyfikne. Ställ en fråga du inte vet svaret på. Lyssna på hela svaret.',
    'Universum påminner: varje stor förändring började med någon som vågade prova något nytt.'
  ]
};

function hashStr(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getSign(month, day) {
  for (const sign of SIGNS) {
    const { startMonth, startDay, endMonth, endDay } = sign;
    if (startMonth <= endMonth) {
      if ((month === startMonth && day >= startDay) ||
          (month === endMonth && day <= endDay) ||
          (month > startMonth && month < endMonth)) {
        return sign;
      }
    } else {
      if ((month === startMonth && day >= startDay) ||
          (month === endMonth && day <= endDay) ||
          month > startMonth || month < endMonth) {
        return sign;
      }
    }
  }
  return SIGNS[0];
}

function getHoroscope(dateStr, seeking) {
  const [year, month, day] = dateStr.split('-').map(Number);
  const sign = getSign(month, day);
  const h1 = hashStr(dateStr);
  const h2 = hashStr(dateStr + 'prophecy');
  const h3 = hashStr(dateStr + 'advice');
  const h4 = hashStr(dateStr + 'cta');
  const guidance = seeking ? SEEKING_GUIDANCE[seeking][hashStr(dateStr + 'seeking') % SEEKING_GUIDANCE[seeking].length] : null;

  return {
    sign,
    prophecy: sign.prophecies[h2 % sign.prophecies.length],
    advice: sign.advice[h3 % sign.advice.length],
    cta: SHARED_CTAS[h4 % SHARED_CTAS.length],
    guidance
  };
}

// --- Stars ---
function createStars() {
  const container = document.getElementById('stars');
  if (!container) return;
  const fragment = document.createDocumentFragment();
  const count = 160;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    const isBright = Math.random() > 0.65;
    const size = isBright ? (Math.random() * 2.5 + 1.5) : (Math.random() * 2 + 0.5);
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDelay = Math.random() * 5 + 's';
    star.style.animationDuration = (2 + Math.random() * 4) + 's';
    if (isBright) star.classList.add('star--bright');
    fragment.appendChild(star);
  }
  container.appendChild(fragment);
}

// --- Age check ---
function isUnder18(dateStr) {
  const birth = new Date(dateStr);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age < 18;
}

function isDesktop() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

function isValidDate(dateStr) {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (date > today) return false;
  if (date.getFullYear() < 1920) return false;
  return true;
}

// --- Swish deeplink ---
function getSwishUrl() {
  const data = {
    version: 1,
    payee: { value: '1232721652' },
    amount: { value: 20 },
    message: { value: 'Personnummer: , E-post: ', editable: true }
  };
  return 'swish://payment?data=' + encodeURIComponent(JSON.stringify(data));
}

// --- Share ---
async function shareResult(sign, dateStr, seeking) {
  const hash = dateStr + (seeking ? ':' + seeking : '');
  const url = window.location.origin + window.location.pathname + '#' + hash;
  const text = `Jag är ${sign.name}! ${sign.symbol} Kolla ditt Centerstudenter-horoskop:`;
  const card = document.querySelector('.card');

  let blob;
  try {
    blob = await captureCard(card);
  } catch (err) {
    console.error('Card capture failed:', err);
    blob = null;
  }

  if (blob && navigator.share && navigator.canShare) {
    const file = new File([blob], 'horoskop.png', { type: 'image/png' });
    const shareData = { title: 'Mitt Centerstudenter-horoskop', text, url, files: [file] };
    if (navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (e) {
        if (e.name === 'AbortError') return;
      }
    }
  }

  if (blob) {
    downloadBlob(blob, 'horoskop.png');
    showToast('Bild sparad!');
    return;
  }

  try {
    await navigator.clipboard.writeText(text + ' ' + url);
    showToast('Länk kopierad!');
  } catch {
    showToast('Kunde inte kopiera länken');
  }
}

function captureCard(card) {
  const wrapper = document.createElement('div');
  wrapper.style.cssText = `
    position:fixed;left:-9999px;top:0;
    width:450px;height:800px;
    background:
      radial-gradient(ellipse 80% 40% at 50% 0%, rgba(35,30,65,0.6), transparent),
      radial-gradient(ellipse 40% 40% at 75% 55%, rgba(30,25,55,0.4), transparent),
      #1a1632;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    gap:1.75rem;padding:2.5rem 25px;
    box-sizing:border-box;
    overflow:hidden;
  `;

  for (let i = 0; i < 60; i++) {
    const star = document.createElement('div');
    const isBright = Math.random() > 0.7;
    const size = isBright ? (Math.random() * 2.5 + 1) : (Math.random() * 1.5 + 0.5);
    star.style.cssText = `
      position:absolute;border-radius:50%;
      left:${Math.random() * 100}%;top:${Math.random() * 100}%;
      width:${size}px;height:${size}px;
      background:${isBright ? '#d4b062' : '#ede9df'};
      opacity:${isBright ? 0.5 : 0.2};
      ${isBright ? 'box-shadow:0 0 3px #9a8550;' : ''}
    `;
    wrapper.appendChild(star);
  }

  const logo = document.createElement('img');
  logo.src = 'logo-white.png';
  logo.style.cssText = 'height:22px;width:auto;opacity:0.5;flex-shrink:0;position:relative;z-index:1;';
  wrapper.appendChild(logo);

  const clone = card.cloneNode(true);
  clone.style.cssText = `
    width:100%;max-width:390px;
    background:#211e38;
    border:1px solid #3a3555;
    border-radius:3px;
    outline:1px solid #3a3555;
    outline-offset:5px;
    box-shadow:0 0 60px -15px rgba(26,107,74,0.15),0 20px 50px -20px rgba(26,22,50,0.6);
    padding:1.75rem 1.5rem 1.25rem;
    text-align:center;
    position:relative;
    font-family:'Lato',system-ui,sans-serif;
    color:#ede9df;
    line-height:1.6;
    box-sizing:border-box;
    position:relative;z-index:1;
  `;
  clone.querySelectorAll('.card__symbol').forEach(el => {
    el.style.cssText = 'font-size:2rem;line-height:1;margin-bottom:0.5rem;color:#d4b062;text-shadow:0 0 20px rgba(200,170,80,0.3),0 0 50px rgba(200,170,80,0.12);';
  });
  clone.querySelectorAll('.card__name').forEach(el => {
    el.style.cssText = "font-family:'Young Serif',Georgia,serif;font-size:1.4rem;font-weight:400;line-height:1.2;color:#ede9df;margin-bottom:0.3rem;outline:none;";
  });
  clone.querySelectorAll('.card__tagline').forEach(el => {
    el.style.cssText = 'font-size:0.75rem;color:#9a8550;font-style:italic;margin-bottom:1.25rem;line-height:1.4;padding:0 0.25rem;';
  });
  clone.querySelectorAll('.card__divider').forEach(el => {
    el.style.cssText = 'width:3rem;height:1px;background:linear-gradient(90deg,transparent,#9a8550,transparent);margin:0 auto 1.25rem;';
  });
  clone.querySelectorAll('.card__section-label').forEach(el => {
    el.style.cssText = 'font-size:0.55rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#9a8550;margin-bottom:0.4rem;';
  });
  clone.querySelectorAll('.card__personality').forEach(el => {
    el.style.cssText = 'font-size:0.7rem;color:#a5a0b8;line-height:1.6;text-align:left;margin-bottom:1.25rem;';
  });
  clone.querySelectorAll('.card__prophecy').forEach(el => {
    el.style.cssText = "font-family:'Young Serif',Georgia,serif;font-size:0.8rem;color:#ede9df;line-height:1.5;text-align:left;margin-bottom:1rem;";
  });
  clone.querySelectorAll('.card__seeking').forEach(el => {
    if (el.hidden) { el.remove(); return; }
    el.style.cssText = "font-family:'Young Serif',Georgia,serif;font-size:0.7rem;color:#9a8550;font-style:italic;line-height:1.5;text-align:center;margin-bottom:0.75rem;";
  });
  clone.querySelectorAll('.card__advice').forEach(el => {
    el.style.cssText = 'font-size:0.7rem;color:#4a9a6a;line-height:1.5;text-align:center;padding:1rem 0.5rem 0.5rem;border-top:1px solid rgba(42,80,64,0.4);font-style:italic;';
  });
  clone.querySelectorAll('.card__corner').forEach(el => {
    if (el.tagName === 'IMG') {
      el.style.cssText += 'width:12px;height:auto;opacity:0.2;position:absolute;';
    } else {
      el.style.cssText += 'font-size:0.55rem;color:#d4b062;opacity:0.4;line-height:1;position:absolute;';
    }
  });
  clone.querySelectorAll('.card__corner--tl').forEach(el => { el.style.top = '10px'; el.style.left = '12px'; });
  clone.querySelectorAll('.card__corner--tr').forEach(el => { el.style.top = '10px'; el.style.right = '12px'; });
  clone.querySelectorAll('.card__corner--bl').forEach(el => { el.style.bottom = '10px'; el.style.left = '12px'; });
  clone.querySelectorAll('.card__corner--br').forEach(el => { el.style.bottom = '10px'; el.style.right = '12px'; });

  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);

  return html2canvas(wrapper, {
    backgroundColor: '#1a1632',
    width: 450,
    height: 800,
    scale: 2,
    useCORS: true,
    logging: false,
    onclone: (clonedDoc) => {
      clonedDoc.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
        if (link.href && link.href.includes('style.css')) link.remove();
      });
    }
  }).then(canvas => {
    document.body.removeChild(wrapper);
    return new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  }).catch(err => {
    if (wrapper.parentNode) document.body.removeChild(wrapper);
    throw err;
  });
}

function downloadBlob(blob, filename) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove('toast--visible');
  requestAnimationFrame(() => {
    toast.classList.add('toast--visible');
  });
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('toast--visible'), 2500);
}

// --- Reset ---
function resetForm() {
  const input = document.getElementById('birth-date');
  input.value = '';
  input.type = 'text';
  input.placeholder = 'åååå-mm-dd';
  window.location.hash = '';
  selectedSeeking = null;
  document.querySelectorAll('.seeking__btn').forEach(b => b.classList.remove('seeking__btn--active'));
  const resultSection = document.getElementById('result');
  const ctaSection = document.getElementById('cta');
  resultSection.classList.remove('result--visible');
  setTimeout(() => {
    resultSection.hidden = true;
    ctaSection.hidden = true;
  }, 300);
  document.querySelector('.hero').scrollIntoView({ behavior: 'smooth', block: 'start' });
  input.focus();
}

// --- Render ---
function showResult(dateStr, seeking, instant) {
  const { sign, prophecy, advice, cta, guidance } = getHoroscope(dateStr, seeking);

  document.getElementById('result-symbol').textContent = sign.symbol;
  document.getElementById('result-name').textContent = sign.name;
  document.getElementById('result-tagline').textContent = sign.tagline;
  document.getElementById('result-personality').textContent = sign.personality;
  document.getElementById('result-prophecy').textContent = prophecy;
  document.getElementById('result-advice').textContent = advice;
  document.getElementById('cta-text').textContent = cta;

  const seekingEl = document.getElementById('result-seeking');
  if (guidance) {
    seekingEl.textContent = guidance;
    seekingEl.hidden = false;
  } else {
    seekingEl.hidden = true;
  }

  const ctaSection = document.getElementById('cta');
  const minor = isUnder18(dateStr);

  if (minor) {
    ctaSection.querySelector('.cta__minor').hidden = false;
    ctaSection.querySelector('.cta__adult').hidden = true;
  } else {
    ctaSection.querySelector('.cta__minor').hidden = true;
    ctaSection.querySelector('.cta__adult').hidden = false;

    const swishLink = document.getElementById('swish-link');
    const qrBlock = document.getElementById('swish-qr');
    const swishHint = document.getElementById('swish-hint');
    if (isDesktop()) {
      swishLink.hidden = true;
      swishHint.hidden = true;
      qrBlock.hidden = false;
    } else {
      swishLink.href = getSwishUrl();
      swishLink.hidden = false;
      swishHint.hidden = false;
      qrBlock.hidden = true;
    }
  }

  const resultSection = document.getElementById('result');
  resultSection.hidden = false;
  ctaSection.hidden = false;

  requestAnimationFrame(() => {
    resultSection.classList.add('result--visible');
    resultSection.scrollIntoView({ behavior: instant ? 'instant' : 'smooth', block: 'start' });
    const cardName = document.getElementById('result-name');
    cardName.setAttribute('tabindex', '-1');
    cardName.focus({ preventScroll: true });
  });

  document.getElementById('share-btn').onclick = () => shareResult(sign, dateStr, seeking);
  document.getElementById('retry-btn').onclick = resetForm;
}

// --- Init ---
let selectedSeeking = null;

document.addEventListener('DOMContentLoaded', () => {
  createStars();

  const form = document.getElementById('date-form');
  const input = document.getElementById('birth-date');

  const today = new Date().toISOString().split('T')[0];

  input.type = 'text';
  input.placeholder = 'åååå-mm-dd';
  input.addEventListener('focus', () => {
    if (input.type !== 'date') input.type = 'date';
  });
  input.addEventListener('blur', () => {
    if (!input.value) {
      input.type = 'text';
      input.placeholder = 'åååå-mm-dd';
    }
  });

  input.max = today;

  // Seeking selector
  document.querySelectorAll('.seeking__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('seeking__btn--active')) {
        btn.classList.remove('seeking__btn--active');
        selectedSeeking = null;
      } else {
        document.querySelectorAll('.seeking__btn').forEach(b => b.classList.remove('seeking__btn--active'));
        btn.classList.add('seeking__btn--active');
        selectedSeeking = btn.dataset.seeking;
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value;
    if (!val) return;
    if (!isValidDate(val)) {
      input.setAttribute('aria-invalid', 'true');
      showToast('Hmm, det datumet finns inte i stjärnorna');
      return;
    }
    input.removeAttribute('aria-invalid');
    window.location.hash = val + (selectedSeeking ? ':' + selectedSeeking : '');
    showResult(val, selectedSeeking, false);
  });

  if (window.location.hash) {
    const hashParts = window.location.hash.slice(1).split(':');
    const dateStr = hashParts[0];
    const seeking = hashParts[1] || null;
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr) && isValidDate(dateStr)) {
      input.type = 'date';
      input.value = dateStr;
      if (seeking && SEEKING_GUIDANCE[seeking]) {
        selectedSeeking = seeking;
        const seekingBtn = document.querySelector(`.seeking__btn[data-seeking="${seeking}"]`);
        if (seekingBtn) seekingBtn.classList.add('seeking__btn--active');
      }
      showResult(dateStr, seeking, true);
    }
  }
});
