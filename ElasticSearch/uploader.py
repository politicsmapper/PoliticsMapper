from elasticsearch import Elasticsearch
from debates import convertDebateFile
import os

host = "politicsmapper.cloudapp.net:9200"
#host = "localhost:9200"
es = Elasticsearch([host])

def process(datapath):
    files = os.listdir(datapath)
    for f in files:

        filepath = os.path.join(datapath, f)
        if os.path.isfile(filepath):

            fileExtension = os.path.splitext(f)[1]
            if fileExtension == ".xml":
                print filepath
                debates = convertDebateFile(filepath)
                bulkData = bulkActionSourceList(debates)

                if len(bulkData) > 0:
                    es.bulk(body=bulkData)
            

def bulkActionSourceList(debates):
    bulkActionSource = []

    for debate in debates:
        indexAction = {"index": { "_index" : "hansard", "_type" : "debate", "_id" : debate["id"] }}
        bulkActionSource.append(indexAction)
        bulkActionSource.append(debate)

    return bulkActionSource

process("data/scrapedxml/debates/")