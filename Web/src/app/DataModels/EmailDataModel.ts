export class EmailDataModel {
    dictionary: EmailDictionary[];
    constructor() {
        this.dictionary = [
            new EmailDictionary('doaligroups1825@robot.zapier.com', 'דואלי דן איילון', false),
            new EmailDictionary('doaligroups1867@robot.zapier.com', 'דואלי זרים', false),
            new EmailDictionary('doaligroups1828@robot.zapier.com', 'דואלי ירדן אשר גלבוע', false),
            new EmailDictionary('doaligroups1824@robot.zapier.com', 'דואלי ירושלים', false),
            new EmailDictionary('doaligroups1826@robot.zapier.com', 'דואלי ירקון שרון', false),
            new EmailDictionary('doaligroups1827@robot.zapier.com', 'דואלי כרמל', false),
            new EmailDictionary('doaligroups1829@robot.zapier.com', 'דואלי לכיש', false),
            new EmailDictionary('doaligroups1830@robot.zapier.com', 'דואלי נגב אילת', false),
            new EmailDictionary('doaligroups1832@robot.zapier.com', 'דואלי צבא', false),
            new EmailDictionary('doaligroups1823@robot.zapier.com', 'דואלי שטחים', false),
            new EmailDictionary('doaligroups1831@robot.zapier.com', 'דואלי תחבורה', false),
            new EmailDictionary('doaligroups1851@robot.zapier.com', 'בריאות ארצי 2', false),
            new EmailDictionary('doaligroups1902@robot.zapier.com', 'ספורט', false),
            new EmailDictionary('doaligroups1907@robot.zapier.com', 'מזג אוויר', false),
            new EmailDictionary('doaligroups1919@robot.zapier.com', 'חרדים', false),
            new EmailDictionary('doaligroups1932@robot.zapier.com', 'בריאות ארצי 1', false),
        ]
    }
}

class EmailDictionary {
    email_address: String;
    name: String;
    is_checked: Boolean;
    constructor(email_address: String, name: String, is_checked: Boolean) {
        this.email_address = email_address;
        this.name = name;
        this.is_checked = is_checked;
    }
}