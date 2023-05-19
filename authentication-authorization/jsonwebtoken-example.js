const jwt = require('jsonwebtoken');

// For Creating token
const payload = {
    id,
    f_name,
    l_name,
    email
}
const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_TTL
});

// For verfication
jwt.verify(payload, JWT_SECRET, (err, decoded)=> {
    if(!err){
        console.log(decoded);
    }
})