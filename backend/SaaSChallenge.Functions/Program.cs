using Azure.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Graph;

var host = new HostBuilder()
    .ConfigureFunctionsWorkerDefaults()
    .ConfigureServices(services => {
        services.AddSingleton<GraphServiceClient>((provider) => {
            var configuration = provider.GetRequiredService<IConfiguration>();
            // The client credentials flow requires that you request the
            // /.default scope, and preconfigure your permissions on the
            // app registration in Azure. An administrator must grant consent
            // to those permissions beforehand.
            var scopes = new[] { "https://graph.microsoft.com/User.Read.All" };

            // Multi-tenant apps can use "common",
            // single-tenant apps must use the tenant ID from the Azure portal
            var tenantId = configuration[Config.KEY_AUTHENTICATION_TENANT];;

            // Values from app registration
            var clientId = configuration[Config.KEY_AUTHENTICATION_ID];
            var clientSecret = configuration[Config.KEY_AUTHENTICATION_SECRET];

            // using Azure.Identity;
            var options = new TokenCredentialOptions
            {
                AuthorityHost = AzureAuthorityHosts.AzurePublicCloud
            };

            // https://docs.microsoft.com/dotnet/api/azure.identity.clientsecretcredential
            var clientSecretCredential = new ClientSecretCredential(tenantId, clientId, clientSecret, options);
            
            return new GraphServiceClient(clientSecretCredential);
        });
    })
    .Build();

host.Run();
