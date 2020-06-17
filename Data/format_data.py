import csv

def main():
    input_file = open('movies_data.csv', "r", encoding="utf-8")
    output_file = open('movies_data.txt', "w", encoding="utf-8")
        
    csv_reader = csv.reader(input_file)

    for row in csv_reader:
        output_file.write("\n<|startoftext|>\n")
        output_file.write('|'.join(row))
        output_file.write("\n<|endoftext|>")

if __name__ == '__main__':
    main()