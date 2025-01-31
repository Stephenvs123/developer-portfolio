import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Municipality bill management',
        description: "Me and my team built an an application that assists a company manage there multipile muncipailty bills for over 500+ sites. We included data tracking over various months and integration with dispute login",
        tools: ["Azure Devops", 'C#', 'Tailwinds', 'Angular', "ASP .net", 'TypeScript', 'Mediator', "Azure eventbus", "Azure Keyvault", "API"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Tracking of payments on the SWIFT gateway',
        description: 'We integrated with the SWIFT network to track the movement of international payments accross countries and currencies to add value to customers to gett live updates on their payments. Along with this we were able to give historic data to customers that allowed to track fraudulent transactions or to view any past transaction',
        tools: ["Azure Devops",  "ASP .net", 'SWIFT', "Rest API", "Fintech"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Identity management for an enterprise',
        description: "My team and I implemetented a full identity provider for a large client with over 60 000 users. We integrated with Microsoft Active directory for user storage of employees and custom storage for clients as both used the same login provider. Along with providing the platform we also integrated with multipile apps to allow them to use this new service and to give single sign on to clients and thus deliver a better user experience",
        tools: ["OAuth", "SAML", "OIDC", "ASP .net", "Angular", "Keycloak", "Microsoft AD", "JWT"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Systems Engineer',
    },
    {
        id: 4,
        name: 'Python automation scripts',
        description: 'I created varios automated python scrits to replace manual and repetive process that clients had to complete. We further extend this to facilate payments between companies and reporting that back to the finance department',
        tools: ["Python", "Excel"],
        code: '',
        role: 'Backend Developer',
        demo: '',
        image: realEstate,
    },
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },