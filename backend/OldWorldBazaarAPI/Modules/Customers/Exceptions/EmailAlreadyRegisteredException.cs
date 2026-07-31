using System.Net;
using OldWorldBazaarAPI.Modules.Customers.Exceptions.ErrorCodes;
using OldWorldBazaarAPI.Shared.Exceptions;

namespace OldWorldBazaarAPI.Modules.Customers.Exceptions
{
    public class EmailAlreadyRegisteredException : DomainException
    {
        public EmailAlreadyRegisteredException(string email)
        : base(
            $"The email {email} is already registered",
            HttpStatusCode.Conflict,
            CustomerErrorCodes.CustomerEmailAlreadyRegistered
        )
        {}
    }
}