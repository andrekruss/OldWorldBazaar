using System.Net;
using OldWorldBazaarAPI.Modules.Accounts.Exceptions.ErrorCodes;
using OldWorldBazaarAPI.Shared.Exceptions;

namespace OldWorldBazaarAPI.Modules.Accounts.Exceptions
{
    public class EmailAlreadyRegisteredException : DomainException
    {
        public EmailAlreadyRegisteredException(string email)
        : base(
            $"The email {email} is already registered",
            HttpStatusCode.Conflict,
            AccountErrorCodes.EmailAlreadyRegistered
        )
        {}
    }
}