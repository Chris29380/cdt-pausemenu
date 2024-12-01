const discordlink = "https://discord.gg/ae2jAmtQsm"         //your discrod invit link
const youtubelink = "https://youtube.com"                   //your youtube channel link

const btn = {   //title and desc of each button
    ["maptitle"] : "Map",
    ["mapdesc"] : "Open maps, settings, binds etc.",    
    ["rulestitle"] : "Rules",
    ["rulesdesc"] : "Open Server Rules",    
    ["playertitle"] : "Player Infos",    
    ["shoptitle"] : "Open Shop",
    ["shopdesc"] : "Cars, Weapons, VIP and more !",    
    ["newstitle"] : "News",
}

const shoplink = "https://www.google.fr"       //leave blank if you don't have an external store in web.
                                                //u can use this to a vote link like topservers for example, so change title and desc of this button

const currency = "$"        //currency in use on ur server

//-----------------------------------------------------------------

const rules = [     //content of ur server rules
    {
        title : "RESPECT AND VALUE OF LIFE",
        content : `
            No KOS (kill on sight) unless it is an agreed-upon between gangs in your respected territory (see Gang Guidelines below)
            or both parties have made a mutual introduction and understand why combat is occurring. Do not RDM (random death match)
            or VDM (vehicle deathmatch). You must have a logical reason for killing someone.
            You must value your character's life and the lives of other characters at all times. Therefore, your character's personality
            and mannerisms should portray fear when faced with a life threat. For example, if you have a gun pointed at you, put your hands up.
            <br/><br/>
            Do not harass or disrespect other members or management. Instead, show respect to other players and keep the real-life drama 
            out of roleplay. Do not use derogatory remarks regarding race, national origin, gender, religion, disabilities, or sexual preference.
        `,
    },
    {
        title : "RESPECT AND VALUE OF LIFE",
        content : `
            You have the right to bear arms inside your home, business, or place of employment. Therefore, you may use deadly force inside your
            home, business, or place of work if your character's life is at risk. Home and business owners may choose to disallow this at their discretion.
            Police may ignore hostage-takers demands while at any police precinct.
            New players may be taken hostage but you may not rob or kill them. A new player is any character that is 3 days old or less, indicated by a green
            turtle above their head.
            <br/><br/>
        `,
    },
]

//-----------------------------------------------------------------

const news = [  //content of updates button
    {
        title : "Illegal",
        content : "Ajout mapping mafia"
    },
    {
        title : "Legal",
        content : "Ajout du métier Mineur sur Cayo."
    },
    {
        title : "Bug",
        content : "Correction Bug concernant les véhicules rentrés au garage avec une couleur rgb."
    },
    {
        title : "Illegal",
        content : "Ajout d'un circuit de drogue et d'écoulement."
    },
    {
        title : "Bug",
        content : "Correction Bug concernant les véhicules rentrés au garage avec une couleur rgb."
    },
]