
export class Helpers {

    static loginHeadless = (email: string, password:string) =>{

        const userCredentials = {
            "user" : {
                'email': email,
                'password': password
            }
        }

    cy.request('POST' , 'https://api.realworld.io/api/users/login' , userCredentials
    ).its('body').then(body => {
        const token = body.user.token
        cy.visit('/',{
        onBeforeLoad(win){
            win.localStorage.setItem('jwtToken' , token)
        }
    }
        )
    })
    }

    static signUpHeadless = (email: string, password:string , userName: string) =>{

        const userCredentials = {
            "user" : {
                'email': email,
                'password': password,
                'username': userName
            }
        }

    cy.request('POST' , 'https://api.realworld.io/api/users' , userCredentials
    ).then((resp) => 
        expect(resp.status).to.eq(200))}   // .its('body')
    // .then(body => {
    //     const token = body.user.token
    //     cy.log(token)
    //     console.log(token)
    //     cy.visit('/',{
       
    // }
    //     )
    // })
    }



  