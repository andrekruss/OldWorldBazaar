using System.Net;

namespace OldWorldBazaarAPI.Shared.Exceptions
{
    public class DomainException : Exception
    {
        public HttpStatusCode StatusCode {get;}
        public string ErrorCode {get;}

        protected DomainException(string message, HttpStatusCode statusCode, string errorCode)
        :base(message)
        {
            StatusCode = statusCode;
            ErrorCode = errorCode;
        }
    }
}