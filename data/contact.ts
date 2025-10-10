// contact interface
export interface Contact {
    email: string;
    location: string;
    phone: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    socialLinks: {
        name: string;
        url: string;
        icon: string;
    }[];
}

// contact data
export const ContactData: Contact = {
    email: "ayman@example.com",
    location: "Saida, Lebanon",
    phone: "+961 70 123 456",
    coordinates: {
        lat: 33.5574477,
        lng: 35.3718607
    },
    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/aymandandan",
            icon: "github"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/aymandandan",
            icon: "linkedin"
        }
    ]
};
