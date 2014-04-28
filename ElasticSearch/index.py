from debates import convertDebateFile
import os
import sys

def process(datapath):
    files = os.listdir(datapath)
    files.sort()
    ids = []
    for f in files:

        filepath = os.path.join(datapath, f)
        if os.path.isfile(filepath):

            fileExtension = os.path.splitext(f)[1]
            if fileExtension == ".xml":
                print filepath
                debates = convertDebateFile(filepath)
                ids += [x["id"] for x in debates]
                
    f = open("index.txt", "w+")
    f.write("\n".join(ids))
    f.close()
    print "DONE"

if __name__ == "__main__":
    process(sys.argv[1])
