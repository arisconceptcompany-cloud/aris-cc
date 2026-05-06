const fs = require('fs');
const languages = ['fr', 'en'];

const route= [
    {
        id: 1,
        child: [1,2,3,4,5,6]
    },
    {
        id: 2,
        child: [1,2,3,4,5,6,7,8,9,10]
    },
    {
        id: 3,
        child: [1,2,3,4,5]
    },
    {
        id: 4,
        child: [1,2,3,4,5,6,7]
    },
    {
        id: 5,
        child: [1,2,3,4,5]
    }
]
const staticRoutes = [
    "/",
    "/service", "/contact", "/apropos", "/avantages", "/ebook", "/carrier"
];
const dynamicRoutes = [];
languages.forEach(lang => {
    staticRoutes.forEach(route => dynamicRoutes.push(`/${lang}${route}`));

    route.flatMap((e)=>e.child.map((id)=>{
        dynamicRoutes.push(`/${lang}/service/${e.id}/${id}`);
    }))
});
dynamicRoutes.push("/notfound")
const packageJson = JSON.parse(fs.readFileSync('./package.json'));
packageJson.reactSnap = { include: dynamicRoutes };
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log("Routes mises à jour dans package.json !");