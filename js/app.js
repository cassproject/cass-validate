require("/js/cass/pem-jwk");

var mrr = new EcIdentity();
mrr.ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEowIBAAKCAQEAw9+XIgz4esPqnv90tGo7X5kFSXbAEZTasT+pF0KmDtkWlmZWp3kqjdRYG6b2zfsBSV3zK8mxXiJvFdQQysj4AKrcongk8Edbv3udYiaahvl/GaeC7YKfIcLfdNHjfWk8wNfaYauaWOcSvjkAK0HD+ZzcbcocDC5gKa8KX0BmWZ5WmaWSEA8iC2EYH4i4RSgBtzPhCa0ZE4v5a2+ZyGN9QnnTcIMdP5hzr1fAXD+xP9ZzdlbvmXGhUACnOyq8U9f7Onlr2oNDQXq3BIxiPj/fUhK81xLWhxLHFnnWL4oQhBPiW8OxKw8CJ+78jlp0NUvm8vXFJOfnQ1BRj3t3e787AQIDAQABAoIBAHuh520Qrs4eVzsglvNBklRW66VhFP6D7D2wpvQNl28Ly1wHIG745ck73Jknm+SLqFY8vL5IwnFeXqtyfV7h1tflAPpzxyz6fYixZ7eKEkNbu8PfnZ54siTHMfA0gtin0jcOh8LaY8P1pjj3FYo4KpClV+TcizONGhl1aKCSr4ekdIEGR3qQ3aED3lN48r+Kl4K2zQQaYOWxaSYfvG8sm3mi8iCZGa0fM6/7AtNhOZLU16Q/VWQwDiNRXfvVAcyamZFr8WFD291SHDxj3VYsihHWz4W2uj5xF1QFmpS08bS7ScSnUnEo1zUuEVNaklzGfEDCDL5UbMGdz4MpHWlF8FkCgYEA7E5ZJWFx9oqxNaVgjfGJInkQCUfKCCyECHgVd9/S78df39Vzq7sy/sLdaoFnoFyTpCAgACJt0xGjpI/v4Ywcl3BRq/nHU6AfqkynVkOSMiZYX3I71eUFDbCgxS4bwqq5W+yd6tj0DcO2FOI9OUeQTS/VrITdFaZ62sT3WUsdQc8CgYEA1DKZ125izByIbgxANo1qE4df6V1ct2n+VMn09PLLVBketLgqBzgr31lVABo3LgLevIQ6N7bZHUB7n7Rut8RmZ/Xv1hNGgWcriTGjKf50SzCMuKLfl7QKviGn0DiGdkmowlDkAdpFxyPQsn2Wp0V1PdpbEJcGO4M/FcWMhMIk+i8CgYAXIHvdCrJqnJxHUc4nVjJDq3GEVwBQ2Hp7kbUYLFGqoeqiL3PIpOOSx2OAHvYTXbwdXf+Dw9rXw2wumN+zRVEvCREVMbbuWkd/FU1zRd2zBsmzXay5fFaIRncVlTOmU6sccgXqjB0mk7boSFQRnQ1kYIAbCE3S5p4zdv92P8G3RQKBgQC5gu9qHvAyv7Mqen1c8+7L2eso6t1W4ExgNht4Vhcak8d7eRINM7dvUPr11vVsvUebCgKXmLxhTXGGosi00fgxZRpjToCyOs8d5w5ddT6YSX6NIJ9XUiieJnA+olwzZ5wpHWzojbm5Kn+WvCMMY7Xm+FHqxA3H06tATm/V1KFdMwKBgBGAkuaL873/+tR0XxE8mvBBW67vDHp9u+YN4fEnhIgw5HS+PnnrH53uBoAeJYLZ+gTEe49pFI7wlWdT1+KmM4vcrAwhKBnt7VWv2oPftS+J/Am1Zwh4YSZSWqZgniKHrFaLsl5atK6HwGsrFr/fYL+H4dhfDjZplMwfjaiAk2bL-----END RSA PRIVATE KEY-----");
mrr.displayName = "Mr. R";
var georgia = new EcIdentity();
georgia.ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEowIBAAKCAQEAlN5cYxvgn0YCiwgcMsBaN4NoSiaK3nLQg9/sKtYfADpaEIdm1gacgnzWmU9lrrobTjCmiz5VkunNGD7MPMQQya08uyiBkWGenosUXz3cxImBMRQIC24C2PPXzVxFj041NqHl/ul4WrhafcPrmZ+emvSsHcBjiVpoFSb8+s4zJmrE2Sn10Bb/VJ89SE0o02kbaJv1sKwe970eHdx5iLhbEX6f7y4HiLdB9uUOqUqqraB2StypllFunhur6E7x/eVrc5wUG6IF9sWNcfXwmhWRyEDTHOZk7T/ywCOvOz89qUBjCYRjtjk2MGcPa06L48JSdy97zQUEaN6R9lz5/A9oxwIDAQABAoIBAHdUarATJ5Hkd6Nko93WrDp1fkJ59LTtSdF7y/5mVsFDBPDc6ITFFe3PDeIkb7iIe9zISKezFrtF6F338JUBAQf4cob/qCSWIKSrjW/u0alFI6bojK5Ex8mKZMC7pxKBOUyKqCcWlJ/7yKWpR5CED4nceJ78mYz/SBE0iHKumPfAQU6WRr4JIiZLlXA0MncLWLcllViXvU3jxdPVbKQjTH4HubM0tjtQbJHGgQx6t423tIUIAasWY8sON2Xrblv60ESolc9gGvrKfJK5Sevl5Qt+HjtRWmdGh2xbMqh7yGHxRAn6NieISsv40x15pHw2JB2gwNA4bRWKoABKCygirxECgYEA2LVS4HE5xvAOMHmWRw13wYbpfXm6ASQQNl35jBM/rUTgabDiNP/XMHJ8EFolknxUsMt6L5FT8hO7gY+3HtzP6tshjCzXKiVLlZglMwUerpLyGOfVGFa1GrAUMkiCCMKkpJ1ulQKb+gldvNSAHMoazJ1weYNNNJDAx708qB+tt98CgYEAr9w1DOZIuba70+AyMXKafSBl8cifZAupksxZxWYmjIxf4EvcZ+zVo/fl5HtOayBOl4Qb6ku/acWeQu9pjZK1uYQtiwSFqJUskQbePagRZcqiTEgzlT5KVINiiS0qbb9HcZYf2uy3H9GfQPJoYZK4JLwyNR/iy9fxPfXY/pfGDBkCgYB4ayGXaDNj0UcBNr8D0n8GQfKC794k/iYoH8YoSRXsMUbGVC0OqE+qMyOvbnhMUtw4tYi63/WWodJipzppYugCKCwXGV+iosDCap3ZIPIwraTro/9sm9nc75T5cAMZ3RbiBj1Jff6wTP4SjL53wPJtWtsCGq0PFZSaKRSIk7nTXwKBgQCqIkUknKlhGfsu6KhGlFQHl89okao6VNoSDicPRVsoACpFSb8Kv+KUBiFf4TclhpTiGsoS6oNdZfVNVmdssrGir9CLvK0+QktiZx2c0rs6GkbXu8ZDrYalqpIqmgqBMFuC9TUOTJKBcwA6CgqX0yTZTUTZhmaYxOo8AluTOuw8CQKBgFGEqPnJ64SzKgH0LGtR8+T5Mqj4v10NtzwgDYH4bCZaW2Gd0WVCwcYU4z4gL67HgkVVLxT5XtO4c8Nkg3vLjnMxKJpwf60vHyFHhrNFWL3Is56UMLnSf96P+yxVeBd9JHGAqm6srin0BlpElvNoYsMyPXcXQkZWoARZRgeU+PHO-----END RSA PRIVATE KEY-----");
georgia.displayName = "Georgia Department of Education";
var appling = new EcIdentity();
appling.ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEowIBAAKCAQEAw8MJylKfTs3zKTnRKtBxgJm8kbnCsDGz0cr98OFsHmd+EqaHYB3Eqo6BCeCf8MC7vvfb1GrAuvGmc1naQJvXp67eFil64axSOb1TkCMWdGMsGWLXtk/3fjq6226MohM5v7vQMRozLJWfTv+Kro3/xrbwEp9v+tansawQCDrF4NpCHoFhJ2SwkSwC+19a9mL4Qf07bnPejrXn3+CnRYpWNd/LtoRmNuzrRNBUgn1Nazi0iyg+cL6NhSrNIhD7uO8ld2sqT7zecxBS8QjEznjo1VFtcJ9Z8nFozsmWemZgJbBsaRCELEgchiPdQuw7bUaFyBCmU/k+inbg42eXsfZ7gwIDAQABAoIBAHEmMmp3Bw2NjJavjG6qvHAQbCXusNEWaVFBezXXlZ6dQwmUp3quuhW6+Gq1Ir0NKXdf2/gTHALx2buim7vsV+Hb+RHmN9houb4V6E7PeRMcn0itEPGXlv2nBIoAg9jKM/7Wl6dJ9Xo3oTUQDyCFgulgo7Kf5SGfIJ5ZTYr0LZugiJ7gqe7ug1/R1xEP3Cn43Dk24H7fobsW6IZmYY86VV6Gcm4Ek9+klb99bvrMNmrLSJuBp3QkxTuDRKKtK6BWNLI6Jzn/LOVygz6cd5zbH/oJtxjt8yO74o45F5AwYM4nLLnHjKNFYkfod1vPrw9CAC5mezn8R2h29ibIZqvKfQECgYEA7CP4/M/s8WdtkWcp2CytbNQ5Wu/OqzAZsRUOPAKwp+8aUng/T1K+vhTI/BICIH2V8k1AWgIXaa8AFU8IAKTy3bj4Eh8skW2korR0Ll+I48DhTENOXo+/bfkxy2z+6IfWHUvxvRy6ayPEN1Gz3HywJxMu26zwIvupCUpkrNWtSbECgYEA1Dm6BMG0EXZD8FfFZdm7jt/8ChYU8yzrcxftPFk1BTU6dv8S9Tvs7+dlsza3uHpbULZnCMd0M3WoGEqB78uUVRheRPtfwe78y6Pmx3Y3yT+f+EkgPdITojTwlWknVsE2M20ABmgLhRGio+m2KWwQ1P/FjvYHUGbcV1DKKnebsXMCgYEAwCvONz+nHhYDru77uLczM3vKaVz7HYl5fwkZmnC9/wywqSi+rPkzzVDw92JYZMSPQK7pjdZh41nNgYndg1i5ZQNgrq68AGXwM5ETc6G/r0mKkBu+LWpiaUcA5QIAuI/DCfiB9FrqwsJKrpJJA0hduo779T5Z9r5DJBJst9L0wSECgYB4AnzSm8b76OjaTIfv5IRPcxHPklUeflRWrT0WV0vIOiVpjSxnSQ/fSfcUtOiHhYmFxt/U8xUe1HXN5rQ7qd+jjzgfwhaQUFjbvz+No6hAQZ5whMmaq+U2YMF7fA8m2/OOeSD+fm+lPCfAkTTVj6qlCE3rXe0c5k3LgoAQK7r7SQKBgGQHk2e3QgkI/fr7g7QMRPeBmskqltkVje1Gbw8IGiINwwWZLNkiI7cysS9bijhDgGU4rRcPmknEewRq1tsViHGrLxzUv9d5n6MDNZqVTwlBDBmczU5mZKR/LKdMIPrPGJ3a3mUd/78zLR83LElFQbnJJpivbRzmU24EV1MvqvdP-----END RSA PRIVATE KEY-----");
appling.displayName = "Appling School District";
var applingMiddle = new EcIdentity();
applingMiddle.ppk = EcPpk.fromPem("-----BEGIN RSA PRIVATE KEY-----MIIEowIBAAKCAQEAsIIjEKPhRTTM/CZQmURzeuufqXvGhR6rdrBQuwrwB0NTocI3jFkGly17pkv/tCAbAxlxqtnzap25bv9jwr3/tOlQi9qVOkHwrpzJXUrED1+BLZxqK8lmIXU3D6uYBsG/n6uFikxzFdAbjjYaNZQ4CX0iJa5xvW9bBQvWp7mVtCZVegfNux+Y6epQ48qj5Bnb1ZEKaS9vkfhCGtjUHgI1W3K90YWEt0g8v4kSRIjle2K/GikQEjGZUnCQL3jNjNMk9M/H5sW/1Xut3v0I1C4tLAGDCXGioVsn4z2KSGGoV+Vw0FvHJTpMvWitQz0dmBHyp/YhD/aqMmMAeBr0mmMaVwIDAQABAoIBAGAlk1o2GrirCVn0uQSz/7+eZ+tXbA0JZtcRNfic/aDHMOA1PjLqL6fb87XjQhdpQa2Ph5ZMgMa7wc3PuhTTkF2IlgKIf68rSiKjbyCtYF0LZf9la4QMgeCJzANyMi7EDVC5itWJzUq9gLUXjXFQGrI4gohKHNTWuprmFvhoJD7rlJ5HIKNiPBohzs8ya/tsXk1LvuqhIFBzt2tvIPp4oNuzWMg2jDjYspoptdaubtLaM1/TYXwHOtWBE8yTJ/7xiZuPOxDlEZhCqqnVcmBKcCUVmPWopv1tRIkCXma7N2/sNwnSMJp63VA/P1jqVBjhRcfx9nAC81B8I0QisyzX7sECgYEA9j9h4od7Tkul76P18f+a0uFEhiBh/KKbKRsojbtaO7aQ7qjptiB/UV4xcrtwVEEEVttAEU+i5CRqUgcpPDBLwXHFxIQTsdlS0HVUucogJiUq50U/2e4QA5Dq67lxMyvS4t+T3lD2qG8pGfpOyxKbdyYaWgczszq+yfkYDbnXI2ECgYEAt3+xaEwf7KVaTzbNAZfKve7XY+Apd/GFnXgHjujFthNuB2IKEspLkrfYOqhEQ6C4pXUyZzX6VQZay3HB2Vu29v3LbUP1mG1jkVwleJj2ENcUsfzZRE65f2u82UC6KDuWA8hQG0et4fgIoi2TXUpxOKgwkMGvs21WQ+AZxn0a0LcCgYEA5/wMTmoOe1N/L0VLFcIU7Kg2cxmc1nGmNVKVoPio6Gp1HbHaA6+X4mMXuJvnFijuWplRQT3CGqZH16FRcpeZNtPlWd6H41v2zdZLjIBkSytmwNwXbEr/oSxsdMiOYYPet8ejuaSSy1l14jhS9LNB7TzjRH9WcHpedU6LH5s9l+ECgYBjdjhwIwsO11XLKBYY7fD74HEpdsCjfeuBviTCppM8LO3v3Ik/RB2QikwPB1PxIDXVoV/Pp+dnnMksCx4atebHnCter354v5o/mSXKZ4bA/AQAseAGcXGEip5TWA1Pb3TR2grproGmwS3U0kVVRNt37VpdrE6TQAmJQvhVqUwWowKBgFD7dAkFfLBGhwyb0bubTY1dfSSZ/vtjIuSeaF1eM8XrUwFi8yVTIhPi6ln32qz5PzgTyE8HfOfSr2J4TzdVPT46dmLHv1RaWTRAZPcSDsKsgbRMCbrqn/WAIgLObjaqY2vH51t0sWfrL/YshDS+TpkQfwSgbL0JOT0gZ4N4zndZ-----END RSA PRIVATE KEY-----");
applingMiddle.displayName = "Appling County Middle School";

/*
 Copyright 2017 Eduworks Corporation and other contributing parties.

 Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/


var badgePk = null;
$(document).ready(function () {
    $("#ident option").each(function () {
        var identity = new EcContact();
        identity.displayName = $(this).text();
        identity.pk = EcPpk.fromPem($(this).attr("value")).toPk();
        EcIdentityManager.addContact(identity);
    });
    $("#authority option").each(function () {
        var identity = new EcIdentity();
        identity.displayName = $(this).text();
        identity.ppk = EcPpk.fromPem($(this).attr("value"));
        EcIdentityManager.addIdentity(identity);
    });
    refreshAssertions();
    EcRemote.getExpectingString(repo.selectedServer, "badge/pk", function (pk) {
        badgePk = EcPk.fromPem(pk);
    }, console.log);
});

refreshAssertions = function () {
    $("#sidebar").show();
    $("#sidebar #loading").show();
    $("#sidebar #assertions").hide();
    EcAssertion.search(repo, "*", function (assertions) {
        for (var i = 0; i < assertions.length; i++) {
            refreshAssertion(assertions[i]);
        }
        $("#sidebar #loading").hide({
            complete: function () {
                $("#sidebar #assertions").show({});
            }
        });
    }, console.log, {
        size: 5000
    });
}

var allAssertions = [];

refreshAssertion = function (assertion) {
    assertion.getSubjectAsync((subject) => {
        if (subject == null) return;
        assertion.getAgentAsync((agent) => {
            if (agent == null) return;
            if (agent.equals(subject)) {
                assertion.getAssertionDateAsync((assertionDate) => {
                    EcRepository.unsigned = true;
                    EcCompetency.get(assertion.competency, (competency) => {
                        if ($("#assertions [id='" + subject.toPem() + "']").length == 0) {
                            $("#assertions").append("<div><a/></div>").children().last().attr("id", subject.toPem()).find("a").text(getName(subject));
                        }
                        if ($("#assertions [id='" + subject.toPem() + "'] [time='" + assertionDate + "']").length == 0) {
                            $("#assertions [id='" + subject.toPem() + "']").append("<div><a/><ul>Standards:</ul></div>").children().last().attr("time", assertionDate).find("a").text("Turned in " + moment(assertionDate).fromNow() + ".");
                        }
                        var display = $("#assertions [id='" + subject.toPem() + "'] [time='" + assertionDate + "'] ul").append("<li><span/></li>").children().last();
                        $("#assertions div").each(function () {
                            $(this).find("div").sort(function (a, b) {
                                return parseInt($(b).attr("time")) > parseInt($(a).attr("time"));
                            }).appendTo(this);
                        });
                        display.attr("id", competency.shortId()).find("span").text(competency.getName());
                        /* + " -- " + (assertion.getEvidenceCount() == 0 ? "no" : assertion.getEvidenceCount() == 1 ? "one piece of" : assertion.getEvidenceCount() + " pieces of") + " evidence."*/

                        allAssertions.push(assertion);
                        display.attr("assertionIndex", allAssertions.length - 1);

                        display.parent().off("click").on("click", function () {
                            var competencies = [];
                            var assertions = [];
                            $(this).children("li").each(function () {
                                assertions.push(allAssertions[$(this).attr("assertionIndex")]);
                                competencies.push($(this).attr("id"));
                            });
                            gotoDetails(assertions, assertionDate, competencies);
                        });
                    });
                    EcRepository.unsigned = false;
                }, console.log);
            }
        }, console.log);
    }, console.log);
}

gotoDetails = function (assertions, assertionDate, competencies) {
    $("table").html("");
    $("#evidence").html("");
    $("#sidebar").hide({
        complete: function () {
            $("#mainbar").show({});
            $("#mainbar #competency").text("Assignment turned in " + moment(assertionDate).fromNow() + ".");
            $("table").prepend("<h3>Rubric:</h3>");
            $("#evidence").prepend("<h3>Evidence:</h3>");
            for (var i = 0; i < competencies.length; i++) {
                var assertion = assertions[i];
                var competency = EcCompetency.getBlocking(competencies[i]);
                gotoDetail(assertion, competency);
            }
        }
    })
}
gotoDetail = function (assertion, competency) {
    EcLevel.searchByCompetency(repo, competency.shortId(), function (levels) {
        if (levels.length == 0) {
            levels = [
                    EcRepository.getBlocking("https://dev.cassproject.org/api/data/schema.cassproject.org.0.3.Level/6f5d71cb-f9d4-4be2-bf75-e122dd356b87"),
                    EcRepository.getBlocking("https://dev.cassproject.org/api/data/schema.cassproject.org.0.3.Level/ef64d0d4-e9c3-45d5-8762-ab413fa7835d"),
                    EcRepository.getBlocking("https://dev.cassproject.org/api/data/schema.cassproject.org.0.3.Level/c6bac49b-12bb-4c33-bd27-e6899e9ae5bf"),
                    EcRepository.getBlocking("https://dev.cassproject.org/api/data/schema.cassproject.org.0.3.Level/dc627afc-703e-4735-865a-dffe3a3bdcab")
                ];
        }
        var tr = $("table").append("<tr/>").children().last();
        tr.append("<td/>").children().last().attr("id", competency.shortId()).text(competency.getName());

        for (var i = 0; i < levels.length; i++) {
            var td = tr.append("<td/>").children().last();
            td.addClass("level").attr("id", levels[i].shortId()).text(levels[i].name);
            td.click(function (evt) {
                var competencyId = $(this).parent().children().first().attr("id");
                var levelId = $(this).attr("id");

                var a = new EcAssertion();
                var subject = assertion.getSubject();
                a.generateId(repo.selectedServer);
                a.addOwner(EcPpk.fromPem($("#authority option:selected").val()).toPk());
                a.setSubject(subject);
                a.setAgent(EcPpk.fromPem($("#authority option:selected").val()).toPk());
                a.competency = competencyId;
                a.level = levelId;
                var newDate = new Date();
                a.setAssertionDate(newDate.getTime());
                newDate.setFullYear(newDate.getFullYear() + 1);
                a.setExpirationDate(newDate.getTime());
                var evidences = []
                for (var i = 0; i < assertion.getEvidenceCount(); i++)
                    evidences.push(assertion.getEvidence(i));
                a.setEvidence(evidences);
                a.addReader(badgePk);
                $(this).parent().hide({});
                EcRepository.save(a, function () {
                    EcRepository._delete(assertion);
                }, console.log);
            });
        }

        tr.append("<td/>").children().last().addClass("level").text("This claim is in error. Delete.");
        tr.children().last().click(function (evt) {
            $(this).parent().hide({});
            EcRepository._delete(assertion);
        });
        $("table").append("<p/>");

    }, console.log);
    for (var j = 0; j < assertion.getEvidenceCount(); j++)
        assertion.getEvidenceAsync(j, (evidence) => {
            if (evidence.startsWith("http")) {
                EcIdentityManager.signatureSheetAsync(5000, repo.selectedServer, (sheet) => {
                    var fd = new FormData();
                    fd.append("signatureSheet", sheet);
                    EcRemote.postExpectingObject(EcRemoteLinkedData.trimVersionFromUrl(evidence), null, fd, (object) => {
                        if (object == null)
                            $("#evidence").append("<a/>").children().last().attr("href", evidence).text(evidence);
                        var o = new EcRemoteLinkedData();
                        o.copyFrom(object);
                        if (o.type == new EcEncryptedValue().type) {
                            var e = new EcEncryptedValue();
                            e.copyFrom(object);
                            e.decryptIntoObjectAsync((decrypted) => {
                                if (decrypted.name == null)
                                    decrypted.name = decrypted.data.hashCode();
                                if ($("[name='" + decrypted.name + "']").length > 0) return;
                                if (decrypted.mimeType = "image/png") {
                                    $("#evidence").append("<img/>").children().last().attr("name", decrypted.name).attr("src", "data:" + decrypted.mimeType + ";base64," + decrypted.data);
                                }
                            }, console.log);
                        }
                    }, (failure) => {
                        $("#evidence").append("<a/>").children().last().attr("href", evidence).text(evidence);
                    });
                });
            }
        }, console.log);
}

getName = function (pk) {
    var c = EcIdentityManager.getContact(pk);
    if (c == null)
        c = EcIdentityManager.getIdentity(pk);
    if (c == null)
        return "Unknown student.";
    else
        return c.displayName;
}
