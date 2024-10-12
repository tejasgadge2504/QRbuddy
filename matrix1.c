#include<stdio.h>
int main()
{
    int a[3][3];
    printf("Enter the elements of matrix: \n");
    for(int i=0;i<3;i++)
    {
        for(int j=0;j<3;j++)
        {
            scanf("%d",a[i][j]);
        }
    }

    transpose(a[3][3]);

    return 0;
}

traanspose(int a[][])
{
    int t[3][3];

    for(int i=0;i<3;i++)
    {
        for(int j=0;j<3;j++)
        {
            t[i][j]=a[j][i];
        }
        
    }

    for(int i=0;i<3;i++)
    {
        for(int j=0;j<3;j++)
        {
            printf("%d",t[i][j]);
        }
    }

}