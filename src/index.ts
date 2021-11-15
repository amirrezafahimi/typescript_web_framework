import {User} from "./models/User";

const user = User.buildUser({id: 1, name: "homayoun", age: 20});

user.on("change", () => {
    console.log(user);
});

user.fetch();