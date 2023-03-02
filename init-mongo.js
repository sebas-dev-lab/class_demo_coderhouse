db.createUser({
    user: 'adminMdb',
    pwd: 'Admin123*',
    roles: [
      {
        role: 'readWrite',
        db: 'coderdemo'
      }
    ]
  })