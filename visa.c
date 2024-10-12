#include <stdio.h>
#include <string.h>
struct applicant
{
    char name[30];
    char dob[20];
    char country[20];
    char passno[20];
    char date[20];
    char expiry[20];
    char address[100];
};

int main()
{
    struct applicant a1;

    printf("Enter the name of applicant");
    gets(a1.name);

    printf("Enter the Date of birth of applicant");
    gets(a1.dob);

    printf("Enter the country name of applicant");
    gets(a1.country);

    printf("Enter the passno. of applicant");
    gets(a1.passno);

    printf("Enter the date of applicant");
    gets(a1.date);

    printf("Enter the expiry date of applicant");
    gets(a1.expiry);

    printf("Enter the address of applicant");
    gets(a1.address);

    //void output();
    // }

    //  void output()
    //  {
    printf("The name of applicant is %s \n", a1.name);

    printf("The Date of birth of applicant is %s \n", a1.dob);

    printf("The country country name of applicant is %s \n", a1.country);

    printf("The pass no. of applicant is %s \n", a1.passno);

    printf("The date of applicant is %s \n", a1.date);

    printf("The expiry date of applicant is %s \n", a1.expiry);

    printf("The address of applicant is %s \n", a1.address);
}
