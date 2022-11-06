using System.Net;
using System.Net.Http;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Graph;

namespace SaaSChallenge.Functions.Api
{
    public class GetProfile
    {
        private readonly GraphServiceClient _client;
        private readonly ILogger _logger;

        public GetProfile(GraphServiceClient client, ILoggerFactory loggerFactory)
        {
            _client = client;
            _logger = loggerFactory.CreateLogger<GetProfile>();
        }

        [Function("GetProfile")]
        public async Task<HttpResponseData> RunAsync([HttpTrigger(AuthorizationLevel.Function, "get")] HttpRequestData req, string oid)
        {
            // var user = await _client.Users[oid].Request().Select("displayName,identities").GetAsync();
            await Task.Delay(1);
            var response = req.CreateResponse(HttpStatusCode.OK);
            // await response.WriteAsJsonAsync(new {
            //     name = user.DisplayName,
            //     email = user.Identities.FirstOrDefault(identity => identity.SignInType == "emailAddress")?.IssuerAssignedId
            // });
            return response;
        }
    }
}
