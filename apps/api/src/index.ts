import { ability } from '@acl/auth'

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteOtherUsers = ability.can('delete', 'User')

console.log(userCanDeleteOtherUsers)
console.log(userCanInviteSomeoneElse)
