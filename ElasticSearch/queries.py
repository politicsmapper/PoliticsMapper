from elasticsearch import Elasticsearch

#host = "politicsmapper.cloudapp.net:9200"
host = "localhost:9200"
es = Elasticsearch([host])

def moreLikeThis(docId):
    return None

def search(query):
    return None


query = {
    "query" :
    {
        "more_like_this_field" : 
        {
            "content" : 
            {
                "like_text" : "Mr. Tinker asked the Minister of Fuel and Power if the number of youths directed to the mines is equal to the number of mineworkers required.",
                "min_term_freq" : 1,
                "max_query_terms" : 12
            }
        }
    }
}   

a = es.search(index="hansard", doc_type="debate", body=query)

for b in a["hits"]["hits"]:
    print b
    print "\n"